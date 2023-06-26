import React, { useState } from "react";
import ProductPage from "./ProductPage.js";
export default function AnotherApp() {
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onCanPlay={(e) => e.target.checked}
        />
        Dark Mode
      </label>
      <hr />
      <ProductPage
        referId="wizard_of_oz"
        productId={123}
        theme={isDark ? "dark" : "light"}
      />
    </>
  );
}
