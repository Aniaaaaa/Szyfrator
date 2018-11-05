import json
import main
from flask import Flask, request
from flask_cors import CORS
from flask_restful import Resource, Api

app = Flask(__name__)
CORS(app)

@app.route('/weirdAlphabetCode', methods=['POST'])
def post_weirdAlphabetCode():
    data = json.loads(request.data.decode())
    text = data["text"]
    key = data["key"]
    result = main.weird_alphabet_code(text,key)
    return result


@app.route('/weirdAlphabetDecode', methods=['POST'])
def post_weirdAlphabetDecode():
    data = json.loads(request.data.decode())
    text = data["text"]
    key = data["key"]
    result = main.weird_alphabet_uncode(text,key)
    return result


if __name__ == '__main__':
    app.run(debug=True, port=5001) #run app in debug mode on port 5000