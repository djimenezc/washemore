import React from 'react';
import {connect} from 'react-redux'
import {changeUserName} from '../actions'

@connect((store) => {
  return {
    chats: store.chat.chats,
    status: store.chat.statusMessage,
    userName: store.chat.userName
  };
})
class Chat extends React.Component {

  constructor(props) {
    super(props);
  }

  changeUserName() {
    debugger;
    this.props.dispatch(changeUserName(this.state.userName));
  }

  updateUserName(event) {
    this.setState({
      userName: event.target.value
    })
  }

  componentWillMount() {
    this.setState({
      userName: this.props.userName
    })
  }

  render() {
    return <div>
      <h3>Chat info</h3>
      <div>
        <p>Status: {this.props.status}</p>
        <p>userName: {this.props.userName}</p>
      </div>

      <div>
        <h4>Update info</h4>
        <span>
          <input type="text" value={this.state.userName}
                 onChange={this.updateUserName.bind(this)}/>
          <input type="button" onClick={this.changeUserName.bind(this)}
                 value='Change User Name'/>
        </span>
      </div>
    </div>
  }
}

Chat.defaultProps = {};

export default Chat;
