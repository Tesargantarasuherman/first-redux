import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchPostAndUsers} from '../actions';
import UserHeader from './UserHeader';

class PostList extends Component {
    componentDidMount(){
        this.props.fetchPostAndUsers();
    }
    renderList(){
        return this.props?.posts?.map((post,index)=>{ 
            return(
                <>
                    <UserHeader userId={post.userId} title={post.title} />
                    <h5>
                        {index+1} {post.body}
                    </h5>
                </>
            )
        })
    }
    render() {
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
const mapDispatchToProps = dispatch=>{
    return {
        fetchPostAndUsers : () => dispatch(fetchPostAndUsers())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(PostList);