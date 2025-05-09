export async function POST(req: Request) {
  const formData = await req.formData();

  const response = await fetch("http://localhost:5000/detect-cv", {
    method: "POST",
    headers: {
      "ngrok-skip-browser-warning": "true",
    },
    body: formData,
  });

  const data = await response.json();
  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
