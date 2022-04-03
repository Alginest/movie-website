import { Container, makeStyles } from "@material-ui/core";
import React from "react";
import { img_1920, unavailable } from "../../config/config";
import BannerInfo from "../BannerInfo/BannerInfo";
import Header from "../Header/Header";
const useStyles = makeStyles((theme) => ({
  topBox: {
    height: 1000,
    width: "100%",
  },
  background: {
    width: "100%",
    zIndex: -1,
  },
  item: {
    width: "100%",
    height: "1000px",
    position: "relative",
    backgroundImage: (props) =>
      props.backdrop_path
        ? `url(${img_1920}/${props.backdrop_path})`
        : unavailable,
    backgroundSize: "100%",
    backgroundColor: "black",
    backgroundRepeat: "no-repeat",
    boxShadow: "rgba(0, 0, 0, .7) 0 0 0 1000000px inset",
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    top: 0,
    left: 0,
  },
  bigCont: {
    width: "100%",
    height: "1000px",
  },
}));
const handleDragStart = (e) => e.preventDefault();
const SingleCont = (props) => {
  const classes = useStyles(props);
  return (
    <>
      <div
        className={classes.item}
        key={props.id}
        onDragStart={handleDragStart}
      >
        <Container className={classes.bigCont}>
          <Header />
          <BannerInfo
            id={props.id}
            poster={props.poster_path}
            title={props.title || props.name}
            date={props.first_air_date || props.release_date}
            media_type={props.media_type}
            vote_average={props.vote_average}
            overview={props.overview}
          />
        </Container>
      </div>
    </>
  );
};

export default SingleCont;
