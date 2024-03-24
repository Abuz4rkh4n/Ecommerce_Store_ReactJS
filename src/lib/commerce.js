import Commerce from "@chec/commerce.js";

export const commerce = new Commerce(
  import.meta.env.VITE_REACT_APP_CHEC_PUBLIC_KEY,
  true
);
