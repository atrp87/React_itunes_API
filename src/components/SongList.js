import React from "react";
import Song from "./Song";

const SongList = (props) => {
    const songGroup = props.songs.map((song) => {
      return (
        <Song name={song["im:name"].label} 
        artist={song["im:artist"].label} 
        img={song["im:image"].label}/>
        //Each child in a list should have a unique "key" prop.
      );
    });

    return (
      <>
      {songGroup}
      </>
    );
}

export default SongList;