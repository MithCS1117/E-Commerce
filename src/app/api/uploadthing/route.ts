import { createRouteHandler } from "uploadthing/next";

import { ourFileRouter } from "./core";
import { UTApi } from "uploadthing/server";

// Export routes for Next App Router
export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,

  // Apply an (optional) custom config:
  // config: { ... },
});

export async function DELETE(request: Request) {
  const { fileKey } = await request.json();
  console.log("fileKey:",fileKey)
  const utApi = new UTApi();
  await utApi.deleteFiles(fileKey);
  return Response.json({ message: "Image deleted" });
}
