import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchPosts } from '../actions';
import UserHeader from './UserHeader';

class PostList extends Component {
    componentDidMount(){
        this.props.fetchPosts();
    }
    renderList(){
        return this.props?.posts?.map((post,index)=>{ 
            return(
                <>
                    <UserHeader userId={post.userId} title={post.title} />
                    <h5>
                        {index+1} {post.title}
                    </h5>
                </>
            )
        })
    }
    render() {
        console.log(this.props.posts)
        return (
            <div>
                    {this.renderList()}
            </div>
        );
    }
}
const mapStateToProps =(state)=>{
    return {posts:state.posts}
}
export default connect(mapStateToProps,
    {fetchPosts:fetchPosts}
)(PostList);