from flask import Flask
from flask_cors import CORS
import pickle
import numpy

app = Flask(__name__)
CORS(app)
filename = 'IPL_Score_prediction.pkl'
model = pickle.load(open(filename,'rb'))

@app.route("/members")
def members():
    return {"members" : ["Members 1","Member 2","Members 3", "Member 4"]}

if __name__ =="__main__":
    app.run(debug=True)