import React from "react";
import { renderToString } from "react-dom/server";
import Bun from "bun";
function Component(props: { message: string }) {
  return (
    <body>
      <h1>{props.message}</h1>
    </body>
  );
}

const stream = renderToString(<Component message="Hello from server!" />);
console.log(stream);

Bun.serve({
  port: 3001,
  async fetch() {
    // const stream = await renderToReadableStream(
    //     <Component message="Hello from server!" />,
    // );
    return new Response(stream, {
      headers: { "Content-Type": "text/html" },
    });
  },
});
