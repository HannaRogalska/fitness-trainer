
import { AuthConfig } from "convex/server";

export default {
  providers: [
    {
      domain: `https://able-flea-11.clerk.accounts.dev`,
      applicationID: "convex",
    },
  ],
} satisfies AuthConfig;