import os
from flask import Flask, request, jsonify, url_for, send_from_directory
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS
from api.utils import APIException, generate_sitemap
from api.models import db, Character
from api.admin import setup_admin
from datetime import timedelta


ENV = os.getenv("FLASK_DEBUG")
static_file_dir = os.path.join(
    os.path.dirname(os.path.realpath(__file__)), "../public/")

app = Flask(__name__)

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

CORS(app)

setup_admin(app)


@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code


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
    response = jsonify(result)
    return response


@app.route('/characters', methods=['POST'])
def add_character():
    data = request.get_json()
    favorites = data.get('favorites')
    if not favorites:
        return jsonify({'message': 'Favorites list is empty'})

    for fav in favorites:
        origin = fav.get('origin')
        location = fav.get('location')
        if origin is None or location is None:
            return jsonify({'message': 'Invalid favorites list'})

        character = Character(name=fav.get('name'),
                              status=fav.get('status'),
                              species=fav.get('species'),
                              type=fav.get('type'),
                              gender=fav.get('gender'),
                              origin_name=origin.get('name'),
                              origin_url=origin.get('url'),
                              location_name=location.get('name'),
                              location_url=location.get('url'),
                              image=fav.get('image'),
                              url=fav.get('url'))
        db.session.add(character)
        db.session.commit()

    return jsonify({'message': 'Characters added successfully!'})


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
