export async function POST(req: Request) {
  // example API URL : https://f04d-35-196-204-255.ngrok-free.app/detect-text
  const CV_URL = "(( API from google colab ))/detect-cv";
  try {
    const formData = await req.formData();
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 seconds timeout

    const response = await fetch(CV_URL, {
      method: "POST",
      headers: {
        "ngrok-skip-browser-warning": "true",
      },
      body: formData,
      signal: controller.signal,
    });

    clearTimeout(timeoutId); // Clear timeout once response is received

    if (!response.ok) {
      throw new Error(`Status ${response.status}`);
    }

    // Check if the response is JSON
    const contentType = response.headers.get("Content-Type");
    if (contentType && contentType.includes("application/json")) {
      const result = await response.json();
      console.log("Result from detect-cv:", result);
      return new Response(JSON.stringify(result), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } else {
      throw new Error("Invalid response format");
    }
  } catch (err) {
    console.error("Error in detect-cv request:", err);
    return new Response(
      JSON.stringify({ error: "Failed to detect CV", details: err instanceof Error ? err.message : err }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
