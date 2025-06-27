import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";

import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  /*
The resolve options allows me to write imports import { Button } from "@/components/ui/button";
instead of import { Button } from "../../components/ui/button";
this is useful to avoid long relative paths in imports
*/
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
