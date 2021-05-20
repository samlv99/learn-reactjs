import React from "react";
// import PropTypes from "prop-types";
import AlbumList from "./components/AlbumList";

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: "Nhạc Hoa Thịnh Hành",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/7/e/f/1/7ef1891b534ab8777998abde40532c8d.jpg",
    },
    {
      id: 2,
      name: "Nhạc Hoa Thịnh Hành 1",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/7/e/f/1/7ef1891b534ab8777998abde40532c8d.jpg",
    },
    {
      id: 3,
      name: "Nhạc Hoa Thịnh Hành 2",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/7/e/f/1/7ef1891b534ab8777998abde40532c8d.jpg",
    },
  ];
  return (
    <div>
      <h2>Có thể bạn sẽ thích đấy </h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
