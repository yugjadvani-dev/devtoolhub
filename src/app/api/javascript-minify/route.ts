import { NextRequest, NextResponse } from 'next/server';
import { minify } from 'terser';

export async function POST(req: NextRequest) {
  if (req.method === 'POST') {
    try {
      const { code } = await req.json();
      if (!code) {
        return NextResponse.json({
            status: 400,
            error: 'Code is required'
        })
      }

      const minified = await minify(code);

    return NextResponse.json({
        status: 200,
        minifiedCode: minified.code
    })
    } catch (error) {
    return NextResponse.json({
        status: 500,
        error: 'Failed to minify JavaScript'
    })
    }
  } else {
    return NextResponse.json({
        status: 405,
        message: `Method ${req.method} Not Allowed`,
      });
  }
}
