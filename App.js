import './App.css';
import PlayButton from './components/PlayButton';
import Thumbnail from './components/Thumbnail'
import videos from './data/data';
import Counter from './components/Counter'

function App() {


  return (
    <div className="App">


      <div id="thumb">Thumbnails</div>
      {
        videos.map(video => <Thumbnail
          key={video.id}
          id={video.id}
          title={video.title}
          views={video.views}
          channel={video.channel}
          time={video.time}
          verified={video.verified}
          downloaded={video.downloaded}
          image={video.image}
        >
          <PlayButton
            onPlay={() => console.log('Playing... >', video.title,)}
            onPause={() => console.log('Paused... ||', video.title)}
          >
            {video.title}
          </PlayButton>
        </Thumbnail>)
      }


      <div>
        <h2>Counter</h2>
        <Counter> </Counter>
      </div>
    </div>
  );
}

export default App;
