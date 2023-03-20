import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Footer from "./Footer";
import App from "./Hero";
import Body from "./Section";
import Header from "./Header";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Header />
    <App />
    <Body />
    <Footer />
  </StrictMode>
);
