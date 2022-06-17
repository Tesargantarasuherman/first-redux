import logo from './logo.svg';
import './App.css';
import actions, { selectSong } from './actions'
import SongList from './components/SongList';
import SongDetail from './components/SongDetail';
function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-md-6">
          <SongList />
        </div>
        <div className="col-md-6">
          <SongDetail />
        </div>
      </div>
    </div>
  );
}

export default App;
