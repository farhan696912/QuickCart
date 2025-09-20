import { serve } from "inngest/next";
import { inngest, syncUserCreation, syncUserdeletion, syncUserUpdation } from "@/config/inngest";


export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    syncUserCreation,
    syncUserUpdation,
    syncUserdeletion
  ],
});