export async function POST(req: Request) {
  // example API URL : https://f04d-35-196-204-255.ngrok-free.app/detect-text
  const TEXT_URL = "(( API from google colab ))/detect-text";
  
  try {
    const body = await req.json();
    console.log("Request body:", body);

    const response = await fetch(TEXT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "true",
      },
      body: JSON.stringify({ text_desc: body.text_desc }),
    });

    // Check if the response was successful
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText} (status: ${response.status})`);
    }

    const result = await response.json();
    console.log("Response from detect-text:", result);

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    // Handle and log the error
    console.error("Error in POST request:", err);

    return new Response(
      JSON.stringify({ error: "Failed to detect text", details: err instanceof Error ? err.message : err }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
