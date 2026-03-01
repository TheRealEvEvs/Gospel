export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const apiKey = process.env.VITE_GEMINI_KEY || process.env.GEMINI_KEY || "";
  if (!apiKey) return res.status(500).json({ error: "API key not configured on server" });

  const { history, systemPrompt } = req.body;
  const models = ["gemini-2.5-flash", "gemini-2.0-flash", "gemini-2.0-flash-lite"];

  let lastErr = null;
  for (const model of models) {
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
      const contents = history.map(m => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content }]
      }));
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: systemPrompt }] },
          contents,
          generationConfig: { temperature: 0.7, maxOutputTokens: 4096 }
        })
      });
      if (!response.ok) {
        const e = await response.json().catch(() => ({}));
        throw new Error(e?.error?.message || "HTTP " + response.status);
      }
      const data = await response.json();
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!text) throw new Error("Empty response");
      return res.status(200).json({ text });
    } catch (e) {
      lastErr = e;
    }
  }
  return res.status(500).json({ error: lastErr?.message || "Gemini request failed" });
}
