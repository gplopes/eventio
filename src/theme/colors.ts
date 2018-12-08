import theme from "styled-theming";

// $colors-grey-geyser: #dae1e7;
// $colors-grey-regent: #949ea8;
// $colors-grey-mischka: #d9dce1;
// $colors-grey-chateau: #9ca5af;
// $colors-grey-aluminium: #a9aeb4;
// $colors-grey-iron: #cacdd0;

export enum Colors {
  primary,
  alert,
  dark,
  text,
  textInvert,
  background,
  greyRegent
}

const colorTheme = {
  // Colors
  [Colors.primary]: { light: "#22d486" },
  [Colors.alert]: { light: "#ff4081" },
  [Colors.dark]: { light: "#323c46" },

  // Text
  [Colors.text]: { light: "#323c46" },
  [Colors.textInvert]: { light: "#c9ced3" },

  // Bg
  [Colors.background]: { light: "#f9f9fb" },

  // Grey
  [Colors.greyRegent]: { light: "#949ea8" }
};

export default theme.variants("mode", "color", colorTheme);
