import os

from langchain_community.vectorstores import Chroma
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain_google_genai import ChatGoogleGenerativeAI

# print("Done")

from dotenv import load_dotenv
load_dotenv()
chatbot_key = os.getenv("GEMINI_API_KEY")

embeddings = HuggingFaceEmbeddings(
    model_name="BAAI/bge-small-en-v1.5"
)

db = Chroma(
    persist_directory="./db",
    embedding_function=embeddings
)

llm = ChatGoogleGenerativeAI(
    model="gemini-2.5-flash",
    temperature=0,
    api_key=chatbot_key
)

def detect_action(question):

    q = question.lower()

    if "donate" in q:
        return {
            "label": "Donate Now",
            "url": "/donate"
        }

    if "volunteer" in q:
        return {
            "label": "Become a Volunteer",
            "url": "/volunteer"
        }

    if "contact" in q:
        return {
            "label": "Contact Us",
            "url": "/contact"
        }

    return None


def ask_ngo(question, history=[]):

    history = history[-5:]

    docs = db.similarity_search(
        question,
        k=3
    )

    context = "\n\n".join(
        d.page_content
        for d in docs
    )

    history_text = ""

    for user_msg, bot_msg in history:
        history_text += f"""
User: {user_msg}
Assistant: {bot_msg}
"""

    prompt = f"""
You are the official NayePankh NGO assistant.

Rules:
- Use ONLY the provided context.
- Never hallucinate.
- Use history for follow-up questions.
- If information is missing, Go to the website https://nayepankh.com/ and find the relevant Details

History:
{history_text}

Context:
{context}

Question:
{question}
"""

    response = llm.invoke(prompt)

    return {
        "answer": response.content,
        "button": detect_action(question)
    }