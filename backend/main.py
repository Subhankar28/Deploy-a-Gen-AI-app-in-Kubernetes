
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Prompt(BaseModel):
    user_input: str

@app.post("/chat")
def chat(prompt: Prompt):
    user_message = prompt.user_input.lower()
    if "hello" in user_message:
        return {"reply": "Hello! How can I help you today?"}
    elif "your name" in user_message:
        return {"reply": "I'm a mock AI assistant built by Subhankar!"}
    else:
        return {"reply": "This is a simulated response. Replace me with OpenAI for real answers!"}
