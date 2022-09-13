import { redirect } from "@sveltejs/kit";
import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = async ({ data }) => {
  if (data.token) {
    // Why does a relative URL not work here???
    await fetch("http://127.0.0.1:5173/auth/logout", { method: "POST" });
    throw redirect(307, "/");
  }

  return data;
};
