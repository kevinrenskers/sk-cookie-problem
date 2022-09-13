import { json, type RequestHandler } from "@sveltejs/kit";
import { dev } from "$app/environment";

export const POST: RequestHandler = async ({ cookies }) => {
  const token = "foobar";
  cookies.set("token", token, {
    path: "/",
    httpOnly: true,
    secure: !dev,
    maxAge: 31536000,
  });
  return json({ token });
};
