"use client";

import { useState } from "react";

export default function ChatWidget() {

  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState<any[]>([]);

  async function sendMessage() {

    if (!message) return;

    const history = messages
      .filter(m => m.role === "assistant")
      .map((m, i) => [
        messages[i * 2]?.content,
        m.content
      ]);

    const res = await fetch(
      "http://localhost:8000/chat",
      {
        method: "POST",
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify({
          question: message,
          history
        })
      }
    );

    const data = await res.json();

    setMessages(prev => [
      ...prev,
      {
        role:"user",
        content:message
      },
      {
        role:"assistant",
        content:data.answer,
        button:data.button
      }
    ]);

    setMessage("");
  }

  return (
    <div className="fixed bottom-6 right-6 w-96 bg-white rounded-3xl shadow-2xl p-4">

      <div className="h-96 overflow-y-auto">

        {messages.map((m, i) => (

          <div key={i} className="mb-4">

            <div>
              {m.content}
            </div>

            {m.button && (

              <a
                href={m.button.url}
                className="inline-block mt-2 px-4 py-2 rounded-xl bg-black text-white"
              >
                {m.button.label}
              </a>

            )}

          </div>

        ))}

      </div>

      <div className="flex gap-2 mt-4">

        <input
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
          className="flex-1 border p-3 rounded-xl"
        />

        <button
          onClick={sendMessage}
          className="px-4 py-3 bg-black text-white rounded-xl"
        >
          Send
        </button>

      </div>

    </div>
  );
}