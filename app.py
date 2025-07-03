from flask import Flask, jsonify
from config import Config
from models import db, Beasiswa
from scraper import ambil_beasiswa_json
from apscheduler.schedulers.background import BackgroundScheduler

app = Flask(__name__)
app.config.from_object(Config)
db.init_app(app)

# Route to get beasiswa data
@app.route('/api/beasiswa', methods=['GET'])
def get_beasiswa():
    all_data = Beasiswa.query.all()
    return jsonify([{
        'beasiswa_id': str(b.beasiswa_id),
        'title': b.title,
        'description': b.description
    } for b in all_data])

# Function to be run by scheduler
def job():
    with app.app_context():
        print("Working Job")
        ambil_beasiswa_json()  # Calls the scraper function to fetch data

# Scheduler setup
scheduler = BackgroundScheduler()
scheduler.add_job(func=job, trigger="interval", minutes=2)
scheduler.start()

# Setup for the first request
@app.before_request
def setup():
    # Ensure that the database is created only once
    if not db.engine.dialect.has_table(db.engine, 'beasiswa'):
        db.create_all()
    job()  # Run the job once when the app starts up (first request)

if __name__ == '__main__':
    app.run(debug=True)
