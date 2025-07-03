export async function POST(req: Request) {
  const storedApi = req.headers.get('x-api-link');
  
        console.log("uuy");  
  try {
      if (storedApi) {
        const body = await req.json();
        console.log("Request body:", body);


        const response = await fetch(`${storedApi}/detect-text`, {
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
        })
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
