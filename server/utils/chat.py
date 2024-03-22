import pathlib
import textwrap

import google.generativeai as genai

genai.configure(api_key='AIzaSyCew_l9wYlIXvpBjInrYkRkLPWcEKkfbMo')
model = genai.GenerativeModel('gemini-pro')

response = model.generate_content(f"Predict the stock price {'date'}")

print(response)
