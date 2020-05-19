import React from "react";

const Song = ({name, artist, img}) => 
(
    <ul>
        <p>{name}</p>
        <p>{artist}</p>
        <p>{img}</p>
    </ul>
)

export default Song;