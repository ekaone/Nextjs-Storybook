import React from "react";
import { linkTo } from "@storybook/addon-links";
import { Welcome } from "@storybook/react/demo";

export default { title: "Selamat Datang" };

export const toStorybook = () => <Welcome showApp={linkTo("Button")} />;
