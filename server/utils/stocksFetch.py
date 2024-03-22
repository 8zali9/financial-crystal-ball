from polygon import RESTClient
import os
import json
from dotenv import load_dotenv

load_dotenv()

POL_API_KEY = os.getenv("POL_API_KEY")

client = RESTClient(api_key=POL_API_KEY)


ticker = "AAPL"

# List Aggregates (Bars)
aggs = []
for a in client.list_aggs(ticker=ticker, multiplier=1, timespan="day", from_="2024-03-01", to="2024-03-21", limit=50):
    aggs.append(a)

# # Define the filename for the JSON file
# json_filename = 'aggs_data.json'

# # Serialize 'aggs' list to JSON and write to file
# with open(json_filename, 'w') as json_file:
#     json.dump([agg.__dict__ for agg in aggs], json_file, default=str)

from chat import gen

gen(aggs, minDate="2024-03-01", maxDate="2024-03-21")
 
# print(f"Aggregates data written to '{json_filename}'.")
# user -> date -> stocks api -> response -> gemini -> response -> user, db