import { combineReducers } from 'redux';
import postReducers from './postReducers';
import userReducers from './userReducers';

const songsReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:05' },
    { title: 'Macarena', duration: '2:30' },
    { title: 'All Star', duration: '3:15' },
    { title: 'I Want it That Way', duration: '1:45' }
  ];
};

const selectedSongReducer = (state = null, action) => {
  console.log('action',action)
  switch (action.type) {
    case 'SONG_SELECTED':
      return action.payload;
    default:
      return state;
    }
}; 

const reducers = combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
  posts:postReducers,
  users:userReducers
});
export default reducers
