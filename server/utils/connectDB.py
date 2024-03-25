def connectDb(conn):
    try:
        print("connectDB ran")
        from pymongo.mongo_client import MongoClient
        from pymongo.server_api import ServerApi
        client = MongoClient(conn, server_api=ServerApi('1'))
        db = client.fcbdb
        collection = db.fcbdb_coll
        return collection
    except Exception as e:
        print("DB error", e)
        return e