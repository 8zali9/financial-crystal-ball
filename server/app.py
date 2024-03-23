# imports
from flask import Flask, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os
import re
import json
from flask_pymongo import PyMongo
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


# connecting db
app.config["MONGO_URI"] = conn
mongo = PyMongo(app)
DB = mongo.db


# routes
@app.route('/getPredictions/<ticker>/<timeUnits>', methods=["GET"])
def getPredictions(ticker, timeUnits):
    from datetime import date, timedelta
    lastDayDate = date.today() - timedelta(days=1)
    lastLastMonthDate = date.today() - timedelta(days=70)

    stockInputForGemini = []
    for a in client.list_aggs(ticker=ticker, multiplier=1, timespan=timeUnits, from_=lastLastMonthDate, to=lastDayDate, limit=150):
        stockInputForGemini.append(a)

    from utils.chat import gen

    res = gen(stockInputForGemini, minDate=lastLastMonthDate, maxDate=lastDayDate)

    data_str = res.strip("`")  # Remove backticks
    data_str = data_str[1:-1]  # Remove the leading and trailing square brackets

    # Step 2 & 3: Extract data and convert to a list of dictionaries
    # Regex to find all 'Agg(...)' instances
    matches = re.findall(r'Agg\((.*?)\)', data_str)

    aggs_list = []
    for match in matches:
        # For each 'Agg' instance, split by comma and then by equals to create a dict
        agg_dict = {}
        for attr in match.split(', '):
            key, value = attr.split('=')
            agg_dict[key] = value if value != "None" else None  # Convert "None" string to NoneType
        aggs_list.append(agg_dict)

    # Step 4: Serialize to JSON
    json_string = json.dumps(aggs_list)

    # document = {'input': {"l": 1, "h": 4}, 'age': 30}
    # res = DB.stockPredictions.insert_one(document).inserted_id

    return jsonify({
        "res": res
    })


if __name__ == "__main__":
    app.run(debug=True)
