#!/usr/bin/env python3

from flask import Flask
import connexion
import model
from flask_cors import CORS

app = connexion.FlaskApp(__name__, specification_dir='./')
CORS(app.app)
app.add_api('swagger.yml')


#from connexion docs to set CORS headers



if __name__ == '__main__':
    app.run(debug=True)