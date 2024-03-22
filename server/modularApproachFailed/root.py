from flask_cors import CORS
from flask import Flask
from routes import routesBp, connect_db


app = Flask(__name__)

CORS(app)

db = connect_db(app)
print(db)


app.register_blueprint(routesBp)


if __name__ == "__main__":
    app.run(debug=True)
