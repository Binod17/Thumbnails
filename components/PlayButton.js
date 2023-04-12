import "./PlayButton.css";
function PlayButton({ message, children, onPlay, onPause }) {
  let playing = false;
  function handleClick() {
    if (playing) {
      onPause();
    } else {
      onPlay();
    }
    playing = !playing
  }

  return (
    <>
      {/*<button onClick = {()=>{console.log(message)}}>{children}</button>*/}
      <button onClick={handleClick}>{children}</button>

    </>
  )

}
export default PlayButton;