import { NextRequest, NextResponse } from "next/server";
import { generate } from 'ts-to-zod';

export async function POST(request: NextRequest, response: NextResponse){
    try {
        if (request.method === "POST") {
            const {typescriptCode } = await request.json()

            if (!typescriptCode) {
                return NextResponse.json({
                    error: 'No TypeScript code provided',
                    status: 400
                })
              }

              const zodSchema = generate(typescriptCode);
        } else {
            return NextResponse.json({
              status: 405,
              message: `Method ${request.method} Not Allowed`,
            });
          }
    } catch (error) {
        return NextResponse.json({
            error:"Internal server error",
            status: 500
        })
    }
}