"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
import json
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
import datetime

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

@api.route('/user',  methods=['POST'])
def set_user():
    datos = request.get_json()
    if (datos is None):
        return 'Falta información'
    if ('email' not in datos):
        return 'Falta email'
    if ('password' not in datos):
        return 'Falta Password'
    new_user = User.query.filter_by(email = datos['email']).first()
    if (new_user is None):
        new_user = User(name = datos['name'], email = datos['email'], password = datos['password'], is_active = True)
        db.session.add(new_user)
        db.session.commit()
        return 'Usuario Registrado'


@api.route('/login', methods=['POST'])
def set_login():
    datos = request.get_json()
    if (datos is None):
        return 'Falta información'
    if ('email' not in datos):
        return 'Falta email'
    if ('password' not in datos):
        return 'Falta Password'
    user_login = User.query.filter_by(email = datos['email']).first()
    if (user_login):
        if(user_login.password == datos['password']):
            expira = datetime.timedelta(minutes=2)
            access_token = create_access_token(identity = user_login.email, expires_delta = expira) 
            data_token = {
                "info_user": user_login.serialize(),
                "token": 
                "status": "OK" 
            }
            return jsonify(data_token)     
 
        else:
            return 'Clave Invalida'
    else:
        return "No existe Usuario con ese correo"