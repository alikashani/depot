from flask import Flask
app = Flask(__name__)

@app.route("/")
def hello():
    orange = True
    return 'Hello, Flask! Woohoo!'

if __name__ == "__main__":
    app.run()
