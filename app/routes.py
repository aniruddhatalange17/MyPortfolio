from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/design")
def design():
    return render_template("design.html")

@app.route("/fsae")
def fsae():
    return render_template("fsae.html")

@app.route("/manufacturing")
def manufacturing():
    return render_template("manufacturing.html")

@app.route("/research1")
def research1():
    return render_template("research1.html")

@app.route("/research2")
def research2():
    return render_template("research2.html")

