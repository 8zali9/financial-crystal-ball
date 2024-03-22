from flask import Blueprint, jsonify
from dotenv import load_dotenv
routesBp = Blueprint('routes', __name__)
import os
from flask_pymongo import PyMongo

load_dotenv()

async def connect_db(app):
    conn = os.getenv("MONGO_URI")
    app.config["MONGO_URI"] = conn
    db = PyMongo(app).db
    return db

@routesBp.route('/', methods=["GET"])
def home():

    db = connect_db()
    document = {'input': {"l": 1, "h": 4}, 'age': 30}

    res = db.stockPredictions.insert_one(document).inserted_id

    return jsonify({
        "msg": "hello",
        "res": res
    })


@routesBp.route('/a')
def another():
    return "he"


# client = MongoClient(conn)

# print(client.list_database_names())

# client.start_session()

# db = client.get_database("FCB-DB")


# print(db)