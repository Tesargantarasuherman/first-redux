import { combineReducers } from 'redux';
import Axios from 'axios'
const songsReducer = () => {
  // Axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res=>{
  //   return res.data
  // })
  return [
    { title: 'No Scrubs', duration: '4:05' },
    { title: 'Macarena', duration: '2:30' },
    { title: 'All Star', duration: '3:15' },
    { title: 'I Want it That Way', duration: '1:45' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

const reducers = combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
export default reducers
