import React from "react";
import useStyles from "./styles";
import HeadBanner from "../../components/HeadBanner/HeadBanner";
const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.home}>
      <HeadBanner />
    </div>
  );
};

export default Home;
