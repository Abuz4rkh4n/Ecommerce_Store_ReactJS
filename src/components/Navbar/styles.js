import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  header: {
    display: "flex",
    width: "100vw",
    height: "4rem",
    alignItems: "center",
    justifyContent: "space-around",
    position: "fixed",
    top: "0",
    left: "0",
    boxShadow: "5px 0 10px grey",
    backgroundColor: "white",
  },

  container: {
    width: "85vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  searchHide: {
    display: "none",
  },

  searchVisible: {
    display: "block",
    border: "none",
    width: "10rem",
    height: "30px",
    "&:focus": {
      outline: "none",
    },
    fontFamily: "Roboto",
    fontSize: "16px",
  },

  backHide: {
    display: "none",
  },

  backVisible: {
    display: "block",
    marginRight: "2rem",
  },

  headingHide: {
    display: "none",
  },

  headingVisible: {
    display: "block",
    fontFamily: "Roboto",
  },

  search: {
    color: "grey",
    marginRight: "1rem",
  },

  share: {
    color: "grey",
  },

  back: {
    color: "grey",
  },

  headingDiv: {
    display: "flex",
  },
}));
