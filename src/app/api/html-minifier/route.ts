import { minify } from 'html-minifier-terser';

export async function POST(request: Request, response: Request) {
  try {
    if (request.method === "POST") {
      const { html, options } = await request.json();
      console.log("options", options);

      if (!html) {
        return Response.json({
          status: 400,
          error: "HTML content is required",
        });
      }

      try {
        const minifiedHtml = await minify(html, {
          ...options
        });

        return Response.json({
          status: 200,
          minifiedHtml,
        });
      } catch (error) {
        return Response.json({
          status: 500,
          error: "Failed to minify HTML",
        });
      }
    } else {
      return Response.json({
        status: 405,
        message: `Method ${request.method} Not Allowed`,
      });
    }
  } catch (error) {
    console.error("Error fetching CSS minified data:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
