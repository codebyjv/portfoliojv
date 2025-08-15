import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./i18n";
import { Desktop } from "./screens/Desktop";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Suspense fallback={<div>Carregando traduções…</div>}>
      <Desktop />
    </Suspense>
  </StrictMode>,
);