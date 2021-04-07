module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: [
    "react",
  ],
  rules: {
    quotes: [2, "double", { avoidEscape: true }],
    "react/jsx-props-no-spreading": "off",
    "react/react-in-jsx-scope": "off",
    "no-plusplus": "off",
    "react/jsx-filename-extension": [1, { allow: "as-needed" }],
  },
};
