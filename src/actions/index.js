import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const selectSong = (song) => {
    // return an action
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};

export const fetchPostAndUsers =()=>async (dispatch,getState)=>{
    await dispatch(fetchPosts());
    // const userIds = _.uniq(_.map(getState().posts,'userId'))
    // userIds.forEach(id=>dispatch(fetchUser(id)));
    
    _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id=>(fetchUser(id)))
    .value();

}

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response.data })
};

export const fetchUser = id => async dispatch=>{
    _fetchUser(id,dispatch);
}

// memoize
// export const fetchUser = function (id) {
//     return _.memoize(async function (dispatch) {
//         const response = await jsonPlaceholder.get(`/users/${id}`);
//         dispatch({ type: 'FETCH_USER', payload: response.data });
//     });
// };

const _fetchUser = _.memoize(async (id,dispatch)=>{
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({type:'FETCH_USER',payload:response.data})
});
