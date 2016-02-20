from flask import Flask
app = Flask(__name__)

@app.route("/")
def hello():
    orange = True
    return 'Hello, World!'

if __name__ == "__main__":
    app.run()
