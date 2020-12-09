import React from "react";
import Librarysong from "./LibrarySong";

function Library({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
}) {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <Librarysong
            id={song.id}
            setSongs={setSongs}
            audioRef={audioRef}
            songs={songs}
            setCurrentSong={setCurrentSong}
            song={song}
            key={song.id}
            isPlaying={isPlaying}
          />
        ))}
      </div>
    </div>
  );
}

export default Library;
