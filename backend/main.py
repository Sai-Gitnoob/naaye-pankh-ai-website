from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware #The middleware for the communication between the website API BE and the website server
from pydantic import BaseModel
# Used to pass the arguements such as :
# The BaseModel is the primary class in Pydantic used to define data schemas, enforce type validation, and handle serialization.
from rag import ask_ngo


app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
    #Add the GET POST PUT DELETE PATCH OPTIONS in the server on 3000 (* means add all)
)


class ChatRequest(BaseModel):
    question: str
    history: list = []


@app.post("/chat")
def chat(req: ChatRequest):

    return ask_ngo(
        req.question,
        req.history
    )