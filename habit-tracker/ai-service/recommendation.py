import random

def get_recommendations():
    habits = [
        {"title": "Drink More Water", "description": "Stay hydrated by drinking 8 glasses daily."},
        {"title": "Daily Walk", "description": "Walk 10,000 steps every day for better health."},
        {"title": "Read a Book", "description": "Read 20 pages of a book daily to improve your knowledge."},
        {"title": "Morning Meditation", "description": "Meditate for 10 minutes to reduce stress."},
        {"title": "Exercise", "description": "Do 30 minutes of physical exercise every day."}
    ]
    return random.sample(habits, 3)
