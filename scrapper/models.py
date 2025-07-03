from flask_sqlalchemy import SQLAlchemy
import uuid

db = SQLAlchemy()

class Beasiswa(db.Model):
    __tablename__ = 'beasiswa'

    beasiswa_id = db.Column(db.Uuid, primary_key=True, default=uuid.uuid4)
    title = db.Column(db.Text)
    description = db.Column(db.Text)
    link = db.Column(db.Text)

class Info(db.Model):
    __tablename__ = 'info'
    id = db.Column(db.Integer, primary_key=True)  # New primary key column
    page_count = db.Column(db.Integer)
