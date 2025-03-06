import { serveFile } from "@std/http/file-server";

Deno.serve((req) => { 
  try{
  return serveFile(req, "text.txt");
  } catch (e) {
    console.log(e);

    return new Response("ERROR check cls");

  }
}
)
