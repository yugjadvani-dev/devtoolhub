// import JSONFormatter from "json-formatter-js";
// import { NextRequest, NextResponse } from "next/server";

// export async function POST(req: NextRequest) {
//   if (req.method === "POST") {
//     try {
//       const { json } = await req.json();
//       if (!json) {
//         return NextResponse.json({
//           status: 400,
//           error: "Code is required",
//         });
//       }

//       const formatter = new JSONFormatter(json, 2);
//       const formattedJSON = formatter.render().innerHTML;

//       return NextResponse.json({
//         status: 200,
//         formattedJSON,
//       });
//     } catch (error) {
//       return NextResponse.json({
//         status: 500,
//         error: "Invalid JSON data",
//       });
//     }
//   } else {
//     return NextResponse.json({
//       status: 405,
//       message: `Method ${req.method} Not Allowed`,
//     });
//   }
// }
