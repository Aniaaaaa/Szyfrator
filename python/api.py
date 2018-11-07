import json
import main
from flask import Flask, request
from flask_cors import CORS
from flask_restful import Resource, Api

app = Flask(__name__)
CORS(app)

#Caesar
@app.route('/ceasarCode', methods=['POST'])
def post_ceasarCode():
    data = json.loads(request.data.decode())
    text = data["text"]
    key = data["key"]
    result = main.caesar_code(text,key)
    return result

@app.route('/ceasarDecode', methods=['POST'])
def post_ceasarDecode():
    data = json.loads(request.data.decode())
    text = data["text"]
    if (data["key"]!= ""):
        key = data["key"] 
        result = main.caesar_uncode_known(text, key)
    else:
        result = main.caesar_uncode_blind(text)
    return result

#Vigenere
@app.route('/vigenereCode', methods=['POST'])
def post_vigenereCode():
    data = json.loads(request.data.decode())
    text = data["text"]
    key = data["key"]
    result = main.vigenere_code(text,key)
    return result

@app.route('/vigenereDecode', methods=['POST'])
def post_vigenereDecode():
    data = json.loads(request.data.decode())
    text = data["text"]
    key = data["key"]
    result = main.vigenere_uncode(text,key)
    return result

#Transposition
@app.route('/transpositionCode', methods=['POST'])
def post_transpositionCode():
    data = json.loads(request.data.decode())
    text = data["text"]
    key = data["key"]
    result = main.transposition_code(text,key)
    return result

@app.route('/transpositionDecode', methods=['POST'])
def post_transpositionDecode():
    data = json.loads(request.data.decode())
    text = data["text"]
    if (data["key"]!= ""):
        key = data["key"] 
        result = main.transposition_uncode_known(text, key)
    else:
        result = main.transposition_uncode_blind(text)
    return result

#Bacon
@app.route('/baconCode', methods=['POST'])
def post_baconCode():
    data = json.loads(request.data.decode())
    text = data["text"]
    result = main.bacon_code(text)
    return result

@app.route('/baconDecode', methods=['POST'])
def post_baconDecode():
    data = json.loads(request.data.decode())
    text = data["text"]
    result = main.bacon_uncode(text)
    return result

#Original Vigenere
@app.route('/originalVigenereCode', methods=['POST'])
def post_originalVigenereCode():
    data = json.loads(request.data.decode())
    text = data["text"]
    key = data["key"]
    result = main.original_vinegere_code(text,key)
    return result

@app.route('/originalVigenereDecode', methods=['POST'])
def post_originalVigenereDecode():
    data = json.loads(request.data.decode())
    text = data["text"]    
    if (data["key"]!= ""):
        key = data["key"] 
        result = main.original_vinegere_uncode_known(text, key)
    else:
        result = main.original_vinegere_uncode_blind(text)
    return result

#railFence
@app.route('/railFenceCode', methods=['POST'])
def post_railFenceCode():
    data = json.loads(request.data.decode())
    text = data["text"]
    key = data["key"]
    result = main.railfence_code(text,key)
    return result

@app.route('/railFenceDecode', methods=['POST'])
def post_railFenceDecode():
    data = json.loads(request.data.decode())
    text = data["text"]    
    if (data["key"]!= ""):
        key = data["key"] 
        result = main.railfence_uncode_known(text, key)
    else:
        result = main.railfence_uncode_blind(text)
    return result

#weirdAlphabet
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

#atbash
@app.route('/atbashCode', methods=['POST'])
def post_atbashCode():
    data = json.loads(request.data.decode())
    text = data["text"]
    result = main.atbash_code(text)
    return result

@app.route('/atbashDecode', methods=['POST'])
def post_atbashDecode():
    data = json.loads(request.data.decode())
    text = data["text"]    
    result = main.atbash_uncode(text)
    return result

if __name__ == '__main__':
    app.run(debug=True, port=5000) #run app in debug mode on port 5000