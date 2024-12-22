import random

def get_recommendations():
    habits = [
        {"title": "Drink Water", "description": "Stay hydrated by drinking 8 glasses of water daily."},
        {"title": "Morning Stretch", "description": "Start your day with a 5-minute stretching session."},
        {"title": "Read a Book", "description": "Develop your mind by reading at least 20 pages daily."},
        {"title": "Meditate", "description": "Spend 10 minutes meditating to reduce stress."},
        {"title": "Exercise", "description": "Do a 30-minute workout to stay fit."}
    ]
    return random.sample(habits, 3)