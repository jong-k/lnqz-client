import * as z from "zod";

export const urlSchema = z.object({
  targetUrl: z.url({
    protocol: /^https?$/,
  }),
});
