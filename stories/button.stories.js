import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "@storybook/react/demo";

export default { title: "Tombol" };

export const withText = () => (
  <Button onClick={action("clicked")}>Hello Button!</Button>
);

export const withTextTwo = () => (
  <Button onClick={action("clicked")}>Hello Text 2!</Button>
);

export const withTextThree = () => (
  <div style={{ color: "blue", fontSize: "20px" }}>Apa aja</div>
);

export const withSomeEmoji = () => (
  <Button onClick={action("clicked")}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯 🛂 ⛳ 🛠
    </span>
  </Button>
);
