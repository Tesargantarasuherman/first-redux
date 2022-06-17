import React from 'react'
import { connect } from 'react-redux'

function SongDetail({song}) {
    console.log('song',song)
    if(!song){
        return <div>Select a song</div>
    }
    return (
        <div>{song?.title}</div>
    )
}
const mapStateToProps =(state)=>{
   return {song: state.selectedSong}
};
export default connect(mapStateToProps)(SongDetail);