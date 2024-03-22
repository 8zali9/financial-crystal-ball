import json
import pathlib
import textwrap
from dotenv import load_dotenv
import google.generativeai as genai
import os

load_dotenv()

GEM_API_KEY = os.getenv("GEM_API_KEY")

genai.configure(api_key=GEM_API_KEY)
model = genai.GenerativeModel('gemini-pro')

def to_markdown(text):
    text = text.replace('•', '  *')
    
    lines = text.split('\n')
    indented_lines = ['> ' + line for line in lines]
    
    indented_text = '\n'.join(indented_lines)
    
    return indented_text

def gen(stockInput, minDate, maxDate):
    response = model.generate_content(f"The follwoing list has stock data from `{minDate}` to `{maxDate}`: `{stockInput}`. Analyze the relation and give predictions for the next day; output in the same format.")
    text = to_markdown(response.text)
    print(text)