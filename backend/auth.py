from datetime import datetime, timedelta
from jose import jwt
import bcrypt

SECRET_KEY = "mysecretkey123"
ALGORITHM = "HS256"

def hash_password(password: str):
    return bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()

def verify_password(plain, hashed):
    return bcrypt.checkpw(plain.encode(), hashed.encode())

def create_access_token(data: dict):
    to_encode = data.copy()
    to_encode["exp"] = datetime.utcnow() + timedelta(hours=3)
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)