import sys
import os

# Ensure the backend directory is in the Python path
sys.path.append(os.path.dirname(__file__))

from app.main import app

# Vercel requires this handler export
handler = app
