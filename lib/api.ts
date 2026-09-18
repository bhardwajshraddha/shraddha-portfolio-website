const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
export async function askAI(question: string): Promise<string> {
  try {
    const response = await fetch(`${API_URL.replace(/\/$/, "")}/chat`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ question }) });
    const body = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(body.detail || `The service returned ${response.status}. Please try again.`);
    if (typeof body.answer !== "string") throw new Error("The AI service returned an unexpected response.");
    return body.answer;
  } catch (error) {
    if (error instanceof Error && error.message) throw error;
    throw new Error("I couldn’t reach the AI service. Please try again shortly.");
  }
}
