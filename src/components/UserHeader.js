import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../actions'
class UserHeader extends Component {
    componentDidMount(){
        this.props.fetchUser(this.props.userId)
    }
  render() {
    if(!this.props.users){
        <div>Loading...</div>
    }
    return (
        <>
            <div>{this.props.users?.name}</div>
            <div>{this.props.title}</div>
        </>
    )
  }
}

const mapStateToProps = (state,ownProps) => {
    return {
        users:state.users.find(user=>user.id ==ownProps.userId ),
        title:ownProps.title
    }
}

const mapDispatchToProps = dispatch=>{
    return {fetchUser:(userId)=>dispatch(fetchUser(userId))}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserHeader)