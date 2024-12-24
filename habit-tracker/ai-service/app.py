from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS
from recommendation import get_recommendations
import os

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/')
def home():
    return "Welcome to the Habit Tracker AI Service!"

@app.route('/generate-habit-suggestions', methods=['GET'])
def generate_habit_suggestions():
    suggestions = get_recommendations()
    return jsonify(suggestions)

@app.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(app.root_path, 'static'), 'favicon.ico')

if __name__ == '__main__':
    app.run(port=5001, debug=True)