from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import ForeignKey, Enum


db = SQLAlchemy()


class Character(db.Model):
    __tablename__ = "character"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255))
    status = db.Column(db.String(255))
    species = db.Column(db.String(255))
    type = db.Column(db.String(255))
    gender = db.Column(db.String(255))
    origin_name = db.Column(db.String(255))
    origin_url = db.Column(db.String(255))
    location_name = db.Column(db.String(255))
    location_url = db.Column(db.String(255))
    image = db.Column(db.String(255))
    url = db.Column(db.String(255))
