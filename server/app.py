# imports
from flask import Flask, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os
from flask_pymongo import PyMongo
from polygon import RESTClient


# initializations
conn = os.getenv("MONGO_URI")
POL_API_KEY = os.getenv("POL_API_KEY")
client = RESTClient(api_key=POL_API_KEY)


# instantiations
load_dotenv()
app = Flask(__name__)


# middlewares
CORS(app)


# connecting db
app.config["MONGO_URI"] = conn
mongo = PyMongo(app)
DB = mongo.db


# routes
@app.route('/getPredictions/<ticker>/<timeUnit>', methods=["GET"])
def getPredictions(ticker, timeUnits):

    aggs = []
    for a in client.list_aggs(ticker=ticker, multiplier=1, timespan=timeUnits, from_="2024-03-01", to="2024-03-21", limit=50):
        aggs.append(a)

    from utils.chat import gen

    gen(aggs, minDate="2024-03-01", maxDate="2024-03-21")

    # document = {'input': {"l": 1, "h": 4}, 'age': 30}
    # res = DB.stockPredictions.insert_one(document).inserted_id

    return jsonify({
        "msg": "hello"
    })


if __name__ == "__main__":
    app.run(debug=True)
