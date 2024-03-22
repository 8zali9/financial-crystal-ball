from polygon import RESTClient
import os
from dotenv import load_dotenv

load_dotenv()

# client = RESTClient(api_key=os.getenv("POL_API_KEY"))

print(os.getenv("POL_API_KEY"))

# ticker = "AAPL"

# # List Aggregates (Bars)
# aggs = []
# for a in client.list_aggs(ticker=ticker, multiplier=1, timespan="minute", from_="2023-01-01", to="2023-06-13", limit=50000):
#     aggs.append(a)

# print(aggs)

# # List Trades
# trades = client.list_trades(ticker=ticker, timestamp="2022-01-04")
# for trade in trades:
#     print(trade)

# # Get Last Quote
# quote = client.get_last_quote(ticker=ticker)
# print(quote)

# # List Quotes
# quotes = client.list_quotes(ticker=ticker, timestamp="2022-01-04")
# for quote in quotes:
#     print(quote)
