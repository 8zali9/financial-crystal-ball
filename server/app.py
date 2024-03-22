# imports
from flask import Flask, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os
from flask_pymongo import PyMongo


# instantiations
load_dotenv()
app = Flask(__name__)


# middlewares
CORS(app)


# connecting db
conn = os.getenv("MONGO_URI")
app.config["MONGO_URI"] = conn
mongo = PyMongo(app)
DB = mongo.db

# routes
@app.route('/', methods=["GET"])
def home():
    document = {'input': {"l": 1, "h": 4}, 'age': 30}

    res = DB.stockPredictions.insert_one(document).inserted_id

    return jsonify({
        "msg": "hello",
        "res": res
    })


@app.route('/a')
def another():
    return "he"


if __name__ == "__main__":
    app.run(debug=True)
