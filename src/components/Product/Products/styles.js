import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  card: {
    display: "flex",
    flexDirection: "column",
    width: "154px",
    height: "254px",
    boxShadow: "2px 2px 15px grey",
    borderRadius: "15px 15px 10px 10px",
    margin: "0.5rem",
    paddingBottom: "1rem",
  },

  cardImage: {
    width: "auto",
    height: "20rem",
    borderRadius: "15px 15px 0 0",
  },

  name: {
    fontFamily: "Roboto",
    fontSize: "12px",
  },

  description: {
    fontFamily: "Roboto",
    fontSize: "12px",
    color: "grey",
  },

  info: {
    marginLeft: "1rem",
    height: "300px",
  },

  addToCart: {
    color: "#4C52C4",
  },

  quantityVisible: {
    display: "flex",
    alignItems: "center",
    marginTop: "1rem",
  },

  quantityhide: {
    display: "none",
  },

  buttons: {
    color: "#4C52C4",
    textDecoration: "none",
    fontSize: "32px",
    fontWeight: "500",
  },

  number: {
    margin: "0 1rem 0 1rem",
    fontFamily: "Roboto",
    fontSize: "14px",
  },
}));
