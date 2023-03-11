import os
from flask import Flask, request, jsonify, url_for, send_from_directory
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS
from api.utils import APIException, generate_sitemap
from api.models import db, Character
# from api.routes import api
from api.admin import setup_admin
# from api.commands import setup_commands
from flask_jwt_extended import JWTManager, create_access_token, jwt_required
from flask_bcrypt import Bcrypt
from datetime import timedelta


ENV = os.getenv("FLASK_DEBUG")
static_file_dir = os.path.join(
    os.path.dirname(os.path.realpath(__file__)), "../public/"
)

app = Flask(__name__)
bcrypt = Bcrypt(app)
app.url_map.strict_slashes = False

# JWT Configuration
app.config["JWT_SECRET_KEY"] = "jwt-secret-string"
jwt = JWTManager(app)

# database condiguration
db_url = os.getenv("DATABASE_URL")
if db_url is not None:
    app.config["SQLALCHEMY_DATABASE_URI"] = db_url.replace(
        "postgres://", "postgresql://"
    )
else:
    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:////tmp/test.db"

app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
MIGRATE = Migrate(app, db, compare_type=True)
db.init_app(app)

# Allow CORS requests to this API
CORS(app)

# add the admin
setup_admin(app)

# add the admin
# setup_commands(app)

# Add all endpoints form the API with a "api" prefix
# app.register_blueprint(api, url_prefix="/api")

# Handle/serialize errors like a JSON object


@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code


# generate sitemap with all your endpoints

@app.route('/characters', methods=['GET'])
def get_characters():
    characters = Character.query.all()
    result = [{'id': character.id,
               'name': character.name,
               'status': character.status,
               'species': character.species,
               'type': character.type,
               'gender': character.gender,
               'origin_name': character.origin_name,
               'origin_url': character.origin_url,
               'location_name': character.location_name,
               'location_url': character.location_url,
               'image': character.image,
               'url': character.url} for character in characters]
    return jsonify(result)

@app.route('/characters', methods=['POST'])
def add_character():
    data = request.get_json()
    character = Character(name=data['name'],
                          status=data['status'],
                          species=data['species'],
                          type=data['type'],
                          gender=data['gender'],
                          origin_name=data['origin_name'],
                          origin_url=data['origin_url'],
                          location_name=data['location_name'],
                          location_url=data['location_url'],
                          image=data['image'],
                          url=data['url'])
    db.session.add(character)
    db.session.commit()
    return jsonify({'message': 'Character added successfully!'})

@app.route('/characters/<int:id>', methods=['PUT'])
def update_character(id):
    character = Character.query.get(id)
    if not character:
        return jsonify({'message': 'Character not found!'})
    data = request.get_json()
    character.name = data['name']
    character.status = data['status']
    character.species = data['species']
    character.type = data['type']
    character.gender = data['gender']
    character.origin_name = data['origin_name']
    character.origin_url = data['origin_url']
    character.location_name = data['location_name']
    character.location_url = data['location_url']
    character.image = data['image']
    character.url = data['url']
    db.session.commit()
    return jsonify({'message': 'Character updated successfully!'})

@app.route('/characters/<int:id>', methods=['DELETE'])
def delete_character(id):
    character = Character.query.get(id)
    if not character:
        return jsonify({'message': 'Character not found!'})
    db.session.delete(character)
    db.session.commit()
    return jsonify({'message': 'Character deleted successfully!'})


@app.route("/")
def sitemap():
    if ENV == "1":
        return generate_sitemap(app)
    return send_from_directory(static_file_dir, "index.html")


@app.route("/<path:path>", methods=["GET"])
def serve_any_other_file(path):
    if not os.path.isfile(os.path.join(static_file_dir, path)):
        path = "index.html"
    response = send_from_directory(static_file_dir, path)
    response.cache_control.max_age = 0  # avoid cache memory
    return response


# this only runs if `$ python src/main.py` is executed
if __name__ == "__main__":
    PORT = int(os.environ.get("PORT", 3001))
    app.run(host="0.0.0.0", port=PORT, debug=True)