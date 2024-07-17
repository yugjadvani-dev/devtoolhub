import CleanCSS from 'clean-css';

export async function POST(req: Request, res: Response) {
  try {
    if (req.method === 'POST') {
      const { input }: any = await req.json();

      if (!input || typeof input !== 'string') {
        return Response.json({
          satus: 400,
          error: 'Invalid CSS input'
        });
      }

      const options: CleanCSS.OptionsOutput = {
        level: {
          1: {
            all: true,
          },
          2: {
            all: true,
            restructureRules: true,
          },
        },
        // format: 'keep-breaks', // Use 'keep-breaks' or remove if not needed
      };

      const minifiedCSS = new CleanCSS(options).minify(input);

      if (minifiedCSS.errors.length > 0) {
        return Response.json({
          status: 500,
          error: 'CSS minification failed', details: minifiedCSS.errors
        });
      }

      return Response.json({
        status: 200,
        minifiedCSS: minifiedCSS.styles
      });
    } else {
      return Response.json({
        status: 405,
        message: `Method ${req.method} Not Allowed`
      })
    }
  } catch (error) {
    console.error("Error fetching CSS minified data:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
