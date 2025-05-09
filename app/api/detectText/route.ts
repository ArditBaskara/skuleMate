export async function POST(req: Request) {
  const body = await req.json();

  const response = await fetch("http://localhost:5000/detect-text", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "ngrok-skip-browser-warning": "true", // ngrokkkk bypas
    },
    body: JSON.stringify({ text_desc: body.text_desc }),
  });

  const data = await response.json();
  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
