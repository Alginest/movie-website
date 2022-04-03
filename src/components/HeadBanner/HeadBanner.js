import React from "react";
import { useGlobalContext } from "../../context";
import { CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Carousel from "../Carousel/Carousel";

const useStyles = makeStyles((theme) => ({
  topBox: {
    height: 1000,
    width: "100%",
  },
}));

const HeadBanner = () => {
  const { loading } = useGlobalContext();

  const classes = useStyles();
  if (loading) {
    return <CircularProgress color="secondary" className={classes.loading} />;
  }
  return (
    <>
      <Carousel />
    </>
  );
};

export default HeadBanner;
