
import "./Thumbnail.css";
function Video({ id, image, title, channel, views, time, verified, downloaded, children }) {
  let channelJSX;
 
  let download;
  if (verified) {
    download = <div className="download"> {downloaded}</div>;
  } else {
    download = <div className="download"> </div>;
  }
 
  return (
    <>
      <div className="container">
        <div className="Pic">
          <img src={image} alt="" classsname="" />
        </div>

        <div className="title"> {title}</div>

        {channelJSX ? (
          <div className="channel"> {channel} ✅ </div>
        ) : (
          <div className="channel"> {channel} </div>
        )}
        <div className="views">
          {views} views <span>.</span> {time}
        </div>
        <div className="download">{download}</div>
        <div>{children}</div>
      </div>

    </>
  );
}
export default Video;
