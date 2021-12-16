"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
import json

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/user', methods=['GET'])
def get_users():
    Users = User.query.all()
    Users = list(map(lambda x: x.serialize(),Users))
    return jsonify(Users)

@api.route('/user/<int:id>', methods=['GET'])
def user_id(id):
    User_id = User.query.get(id)
    return jsonify(User_id.serialize())

