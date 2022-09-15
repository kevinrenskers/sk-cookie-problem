import { redirect } from "@sveltejs/kit";
import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = async ({ fetch, data }) => {
  if (data.token) {
    await fetch("/auth/logout", { method: "POST" });
    throw redirect(307, "/");
  }

  return data;
};
