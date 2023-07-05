import React, { useEffect, useRef, useState } from "react";

const EscapeHatches = () => {
  let ref = useRef(0);
  function handleClick() {
    ref.current = ref.current + 1;
    // alert("You clicked " + ref.current + " times!");
  }
  const inputref = useRef(null);
  const vidref = useRef(null);
  function VideoPlayer({ src, isPlaying }) {
    useEffect(() => {
      if (isPlaying) {
        vidref.current.play();
      } else {
        vidref.current.pause();
      }
    }, [isPlaying]);
    return <video ref={ref} src={src} loop playsInline></video>;
  }
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <>
      <section>
        <h1>Escape Hatches</h1>
        <p>
          Some of your components may need to control and synchronize with
          systems outside of React. For example, you might need to focus an
          input using the browser API, play and pause a video
        </p>
        <button onClick={handleClick}>Click me!</button>
        &nbsp; {ref.current}
        <input type="text" placeholder="Your Input" ref={inputref} />
        <button onClick={() => inputref.current.focus()}>
          click to focus above input
        </button>
        <button onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? "Pause" : "Play"}
        </button>
        <VideoPlayer
          isPlaying={isPlaying}
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        />
      </section>
    </>
  );
};

export default EscapeHatches;
