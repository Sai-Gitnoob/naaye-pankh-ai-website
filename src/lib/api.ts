const API_URL = "http://localhost:8000";

export async function askNGO(
  question: string,
  history: [string, string][]
) {
  const response = await fetch(
    `${API_URL}/chat`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question,
        history,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to contact AI backend");
  }

  return response.json();
}