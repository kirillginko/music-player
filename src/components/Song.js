import React from "react";

const Song = ({ currentSong, isPlaying }) => {
  return (
    <div className="song-container">
      <div
        id="turntable"
        // style={{
        //   background: `linear-gradient(to right, ${currentSong.color[0]},${currentSong.color[1]})`,
        // }}
      >
        <div id="table-shadow"></div>
        <div id="table-feet"></div>
        <div id="wood">
          <div id="grain1"></div>
          <div id="grain2"></div>
          <div id="grain3"></div>
          <div id="grain4"></div>
          <div id="grain5"></div>
          <div id="grain6"></div>
        </div>
        <div id="wood2">
          <div id="grain7"></div>
          <div id="grain8"></div>
          <div id="grain9"></div>
          <div id="grain10"></div>
          <div id="grain11"></div>
        </div>
        <div
          id="table"
          style={{
            background: `linear-gradient(to right, ${currentSong.color[0]},${currentSong.color[1]})`,
          }}
        ></div>
        <div id="button"></div>
        <div id="disk">
          <div
            id="label"
            className={isPlaying ? "animate" : ""}
            style={{ background: `url(${currentSong.cover})` }}
          ></div>
        </div>
        <div id="axis-shadow"></div>
        <div id="axis"></div>
        <div id="arm-shadow"></div>
        <div id="weight-shadow"></div>
        <div id="base">
          <div id="axle-shadow"></div>
        </div>
        <div id="lever"></div>
        <div id="weight"></div>
        <div id="axle"></div>
        <div id="arm"></div>
        <div id="head"></div>
      </div>
      {/* <img
        className={isPlaying ? "rotateSong" : ""}
        src={currentSong.cover}
        alt=""
      /> */}
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
};

export default Song;
