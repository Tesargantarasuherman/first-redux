import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectSong } from '../actions'

class SongList extends Component {
    renderList() {
        return this.props.songs.map((song) => {
            return (
                <tr key={song.title}>
                    <td>{song.title}</td>
                    <td>
                        <button className='btn btn-primary' onClick={()=>this.props.selectSong(song)}>
                            Detail
                        </button>
                    </td>
                </tr>
            )
        })
    }
    render() {
        console.log(this.props)
        return (
                    <table className="table table-dark">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderList()}
                        </tbody>
                    </table>
        )
    }
}
const mapStateToProps = state => {
    return { songs: state.songs }
}
const mapDispatchToProps = dispatch=>{
    return {
        selectSong : (song) => dispatch(selectSong(song))
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SongList);