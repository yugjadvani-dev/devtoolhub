import TextCleaner from "text-cleaner";

export async function POST(req: Request, res: Response) {
  try {
    if (req.method === "POST") {
        const { text }:any = await req.json();
    
        if (!text || typeof text !== "string") {
          return Response.json({
            status: 400,
            cleanedText: "Invalid input"
          });
        }
    
        const cleanedText = TextCleaner(text).trim().valueOf();
        return Response.json({
          status: 200,
          cleanedText,
        });
      } else {
        return Response.json({
            status: 405,
            message: "Method Not Allowed"
        })
      }
  } catch (error) {
    console.error("Error fetching CSS minified data:", error);
    return Response.json({
        error: "Internal server error",
        status: 500
    });
  }
}