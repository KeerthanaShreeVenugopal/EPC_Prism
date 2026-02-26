from datetime import datetime, timedelta
from jose import jwt
import bcrypt

SECRET_KEY = "YOUR_SECRET_KEY"
ALGORITHM = "HS256"

def hash_password(password: str):
    return bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt()).decode()

def verify_password(password: str, hashed: str):
    return bcrypt.checkpw(password.encode("utf-8"), hashed.encode("utf-8"))

def create_token(data: dict):
    to_encode = data.copy()
    to_encode["exp"] = datetime.utcnow() + timedelta(hours=6)
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)