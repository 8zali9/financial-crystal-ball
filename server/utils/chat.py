from dotenv import load_dotenv
import google.generativeai as genai
import os

print("genai import bypassed")

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
    try:
        response = model.generate_content(f"Based on the following stock data from `{minDate}` to `{maxDate}`: `{stockInput}`, generate predictions for the next week in the exact same format as the input. Please provide the output directly without any additional analysis or commentary.")
        text = to_markdown(response.text)
        print("chat ran")
        return text
    except Exception as e:
        print("chat error")
        return e