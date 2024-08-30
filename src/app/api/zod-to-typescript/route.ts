import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { zodToTs } from "zod-to-ts";

export async function POST(req: NextRequest) {
  if (req.method === "POST") {
    try {
      // Parse the incoming schema using Zod
      const SchemaInput = z.object({
        schema: z.string(),
      });

      // Await the JSON body parsing
      const body = await req.json();
      const { schema } = SchemaInput.parse(body);

      // Dynamically import the schema from the provided string
      const dynamicSchema = eval(schema);

      if (!dynamicSchema) {
        return NextResponse.json({ status: 400, error: "Invalid schema" });
      }

      // Convert the Zod schema to TypeScript type definitions
      const tsSchema = zodToTs(dynamicSchema, "MyGeneratedSchema");

      return NextResponse.json({
        status: 200,
        typescript: tsSchema,
      });
    } catch (error) {
      return NextResponse.json({
        status: 500,
        error: "Failed to convert",
      });
    }
  } else {
    return NextResponse.json({
      status: 405,
      message: `Method ${req.method} Not Allowed`,
    });
  }
}
