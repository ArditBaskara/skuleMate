export async function POST(req: Request) {
  const storedApi = req.headers.get('x-api-link');

  try {
<<<<<<< HEAD
    const formData = await req.formData();
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); 
=======
      if (storedApi) {
        const formData = await req.formData();
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 seconds timeout
>>>>>>> 4b39b2be2920dd1b970ed064c1d6dfd95bdb7218

        const response = await fetch(`${storedApi}/detect-cv`, {
          method: "POST",
          headers: {
            "ngrok-skip-browser-warning": "true",
          },
          body: formData,
          signal: controller.signal,
        });

<<<<<<< HEAD
    clearTimeout(timeoutId); +
=======
        clearTimeout(timeoutId);
        if (!response.ok) {
          throw new Error(`Status ${response.status}`);
        }
>>>>>>> 4b39b2be2920dd1b970ed064c1d6dfd95bdb7218

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
      }else {
        return new Response(
          JSON.stringify({
            error: "API endpoint is not configured. Please set the API link first.",
          }),
          {
            status: 400,
            headers: { "Content-Type": "application/json" },
          }
        )
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
