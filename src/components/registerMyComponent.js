import { defineCustomElement } from "astro/components";
import MyComponent from "./Card.astro";

// Verificar si estamos en el entorno del navegador
if (typeof window !== "undefined" && "customElements" in window) {
  if (!customElements.get("my-component")) {
    customElements.define("my-component", defineCustomElement(MyComponent));
  }
}
