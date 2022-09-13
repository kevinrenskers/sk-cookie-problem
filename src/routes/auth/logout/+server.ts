import { json, type RequestHandler } from "@sveltejs/kit";
import { dev } from "$app/environment";

export const POST: RequestHandler = async ({ cookies }) => {
  console.log("DELETE COOKIE!");
  cookies.set("token", "", {
    path: "/",
    httpOnly: true,
    secure: !dev,
    maxAge: 0,
  });
  return json({ ok: true });
};
