import crypto from "crypto";
import { NextRequest, NextResponse } from "next/server";
import os from "os";
import path from "path";
import { generate } from "ts-to-zod";

const tmpDir = os.tmpdir?.();

export async function POST(req: NextRequest){
  if(req.method === 'POST'){
    const {keepComments, skipParseJSDoc, body} = await req.json();
    // const {skipParseJSDoc,keepComments} = query;

      const filePath =
    path.join(tmpDir, crypto.randomBytes(16).toString("hex")) + ".ts";

    try {
      const schemaGenerator = generate({
      sourceText: body,
      keepComments,
      skipParseJSDoc
    });

    const schema = schemaGenerator.getZodSchemasFile(filePath)

    const formattedSchema = schema
      .split(/\r?\n/)
      .slice(1)
      .join("\n");

      return NextResponse.json({
        status: 200,
        success:true,
        schema: formattedSchema,
        error: schemaGenerator.errors[0]
      });
      
    } catch (error) {
      return NextResponse.json({
        status: 500,
        error: 'Failed to convert'
    })
    }
  } else {
    return NextResponse.json({
        status: 405,
        message: `Method ${req.method} Not Allowed`,
      });
  }
}