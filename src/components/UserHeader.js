import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../actions'
export class UserHeader extends Component {
  render() {
    const user =this.props.users.find((user)=>user.id ==this.props.userId )
    console.log('userId',this.props.title)
    return (
      <div>UserHeader</div>
    )
  }
}

const mapStateToProps = (state) => {
    return {users:state.users}
}

const mapDispatchToProps = dispatch=>{
    return {fetchUser:()=>dispatch(fetchUser)}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserHeader)