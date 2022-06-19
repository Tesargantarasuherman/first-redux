import jsonPlaceholder from "../apis/jsonPlaceholder";
export const selectSong = (song)=>{
    // return an action
    return{
        type :'SONG_SELECTED',
        payload: song
    };
};
export const fetchPosts = ()=> async dispatch => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({type:'FETCH_POSTS',payload: response})
};

