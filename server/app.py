# imports
from flask import Flask, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os
from polygon import RESTClient


# instantiations
load_dotenv()
app = Flask(__name__)


# initializations
conn = os.getenv("MONGO_URI")
POL_API_KEY = os.getenv("POL_API_KEY")
client = RESTClient(api_key=POL_API_KEY)


# middlewares
CORS(app)


# routes
@app.route('/getPredictions/<ticker>', methods=["GET"])
def getPredictions(ticker):
    try:
        print("route hit")
        from datetime import date, timedelta, datetime
        currDate = date.today()
        lastDayDate = currDate - timedelta(days=1)
        lastLastMonthDate = currDate - timedelta(days=70)
        nextSixthDayDate = currDate + timedelta(days=6)

        stockInputForGemini = []
        for a in client.list_aggs(ticker=ticker, multiplier=1, timespan="day", from_=lastLastMonthDate, to=lastDayDate, limit=150):
            stockInputForGemini.append(a)

        from utils.chat import gen

        res = gen(stockInputForGemini, minDate=lastLastMonthDate, maxDate=lastDayDate)

        from utils.connectDB import connectDb
        predictedDoc = {
            "ticker": ticker,
            "dateSpan": {
                "from": datetime.combine(currDate, datetime.min.time()),
                "to": datetime.combine(nextSixthDayDate, datetime.min.time()),
            },
            "prediction": res
        }
        collection = connectDb(conn)
        collection.insert_one(predictedDoc)

        return jsonify({
            "res": res
        }), 200
    
    except Exception as e:
        return jsonify({
            "error": "Error occurred"
        }), 500


if __name__ == "__main__":
    app.run(debug=True, port=os.getenv("PORT", default=5000))