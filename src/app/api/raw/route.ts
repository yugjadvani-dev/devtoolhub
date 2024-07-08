import { NextRequest, NextResponse } from "next/server";
import fetch from "node-fetch";

export async function POST(req: NextRequest) {
  try {
    const { input: cssCode } = await req.json(); // Get the CSS code from the request body
    if (!cssCode) {
      return NextResponse.json(
        { error: "CSS code is required" },
        { status: 400 }
      );
    }

    const response = await fetch(process.env.BASEURL || "", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({ input: cssCode }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const minifiedCss = await response.text();
    return NextResponse.json({ minifiedCss }, { status: 200 });
  } catch (error) {
    console.error("Error fetching CSS minified data:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
