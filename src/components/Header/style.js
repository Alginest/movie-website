import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  icon: {
    fontSize: 30,
    color: "white",
  },
  title: {
    color: "white",
    display: "flex",
  },
  logo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    marginRight: "10px",
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "100px",
  },
  list: {
    display: "flex",
    justifyContent: "space-around",
    width: "500px",
    height: "inherit",
  },
  ul: {
    width: "100px",
    display: "flex",
    justifyContent: "center",
    margin: "10px 5px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: 29,
    fontWeight: 800,
    padding: "10px 5px",
    transition: "all 0.3s ease-in",
  },
  active: {
    borderBottom: "3px solid red",
  },
}));
