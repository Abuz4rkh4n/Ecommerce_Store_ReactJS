import { makeStyles } from "@material-ui/core/styles";

const sharedStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const color = {
  color: "white",
};

export default makeStyles(() => ({
  container: {
    display: "flex",
    width: "100vw",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  main: {
    marginTop: "5rem",
    ...sharedStyles,
    flexDirection: "column",
  },

  totalPrice: {
    ...sharedStyles,
    position: "fixed",
    bottom: "0",
    marginBottom: "1rem",
  },

  button: {
    border: "none",
    borderRadius: "8px",
    width: "90vw",
    height: "50px",
    backgroundColor: "#4C52C4",
  },

  priceContainer: {
    ...sharedStyles,
    justifyContent: "space-between",
    padding: "0 1rem 0 1rem",
  },

  badge: {
    ...sharedStyles,
  },

  subtotal: {
    ...sharedStyles,
  },

  totalItems: {
    width: "24px",
    height: "24px",
    backgroundColor: "#00E5C9",
    borderRadius: "50%",
    ...sharedStyles,
    ...color,
    marginRight: "0.5rem",
  },

  heading: {
    ...color,
  },

  amount: {
    ...color,
    marginRight: "0.5rem",
  },
}));
