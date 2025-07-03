import os

class Config:
    SQLALCHEMY_DATABASE_URI = "postgresql://postgres:postgres@localhost:5433/hackathon"
    SQLALCHEMY_TRACK_MODIFICATIONS = False
