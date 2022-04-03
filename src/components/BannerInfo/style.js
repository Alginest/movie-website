import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  bannerInfo: {
    display: "flex",
    width: "100%",
    height: "700px",
    justifyContent: "space-between",
  },
  aboutShow: {
    width: "60%",
    height: "auto",
    marginTop: "100px",
    marginRight: "50px",
  },
  aboutPoster: {
    position: "relative",
    width: "40%",
    height: "auto",
    marginTop: "80px",
    marginLeft: "50px",
  },
  badge: {
    position: "absolute",
    right: 90,
    top: 30,
  },
  poster: {
    borderRadius: 50,
    width: "400px",
  },
  mainTitle: {
    fontWeight: "bold",
    color: "white",
    height: "auto",
  },
  overview: {
    color: "white",
    letterSpacing: 0.5,
    fontWeight: "bold",
    marginTop: "20px",
  },
  btnBox: {
    display: "flex",
    marginTop: "100px",
  },
  redBtn: {
    width: "220px",
    height: "50px",
    borderRadius: "30px",
    fontSize: 20,
    fontWeight: 700,
    backgroundColor: "red",
    color: "white",
    transition: "all 0.3s ease-in",
    "&:hover": {
      backgroundColor: "white",
      color: "red",
    },
  },
  specPage: {
    textDecoration: "none",
    color: "white",
  },
  outBtn: {
    width: "220px",
    height: "50px",
    borderRadius: "30px",
    fontSize: 20,
    fontWeight: 700,
    borderColor: "white",
    color: "white",
    marginLeft: "30px",
    transition: "all 0.3s ease-in",
    "&:hover": {
      backgroundColor: "white",
      color: "red",
    },
  },
  movDate: {
    display: "flex",
    width: "80%",
    justifyContent: "space-between",
    marginTop: "30px",
  },
  mediaType: {
    color: "white",
  },
  date: {
    color: "white",
  },
}));
