const CSSMinifyToolOverview = () => {
    return (
      <div className="mt-12">
        <h1 className="scroll-m-20 text-3xl font-semibold tracking-tight">
          The CSS Minify Tool: Streamlining Your Stylesheets
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          The CSS Minify Tool is designed to help developers optimize their CSS by reducing the size of their stylesheets. This tool takes your existing CSS code and removes unnecessary whitespace, comments, and redundant code, resulting in a more efficient and faster-loading website.
        </p>
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          How It Works
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          The CSS Minify Tool operates by analyzing your CSS file and identifying areas where space can be saved without affecting the functionality of your styles. It performs actions such as:
        </p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Removing whitespace</li>
          <li>Eliminating comments</li>
          <li>Shortening color codes</li>
          <li>Consolidating redundant selectors and properties</li>
        </ul>
        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          Example
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Consider the following CSS snippet before and after minification:
        </p>
        <div className="my-6 w-full overflow-y-auto">
          <table className="w-full">
            <thead>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                  Before Minification
                </th>
                <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                  After Minification
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                  {`body {
    background-color: #ffffff;
    font-size: 16px;
  }
  
  /* Main header */
  header {
    color: #333333;
    padding: 20px;
  }`}
                </td>
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                  {`body{background-color:#fff;font-size:16px}header{color:#333;padding:20px}`}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          As you can see, the minified version of the CSS is much shorter, making your website load faster and use less bandwidth.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          The CSS Minify Tool is essential for any developer looking to optimize their web performance and provide a better user experience. By reducing the size of your CSS files, you can ensure quicker load times and improved efficiency.
        </p>
      </div>
    )
  }

  export default CSSMinifyToolOverview
  