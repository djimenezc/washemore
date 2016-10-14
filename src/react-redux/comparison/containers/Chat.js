import React from 'react';
import {connect} from 'react-redux'
import {changeUserName, changeStatus, addChat} from '../actions'

@connect((store) => {
  return {
    chats: store.chat.chatLog,
    status: store.chat.statusMessage,
    userName: store.chat.userName
  };
})
class Chat extends React.Component {

  constructor(props) {
    super(props);
  }

  changeUserName() {
    this.props.dispatch(changeUserName(this.state.userName));
  }

  changeStatus() {
    this.props.dispatch(changeStatus(this.state.status));
  }

  addMessage() {
    this.props.dispatch(addChat({
      msg: this.state.message,
      user: this.props.userName
    }));

    this.setState({
      message: ''
    });
  }

  updateUserName(event) {
    this.setState({
      userName: event.target.value
    })
  }

  updateStatus(event) {
    this.setState({
      status: event.target.value
    })
  }

  updateMessage(event) {
    this.setState({
      message: event.target.value
    })
  }

  _handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.addMessage();
    }
  }

  componentWillMount() {
    this.setState({
      userName: this.props.userName,
      status: this.props.status,
      message: ''
    })
  }

  render() {

    const items = this.props.chats.map((item) => (
      <div key={item.id}>
        <div>Id: {item.id} Time: {item.timeStamp} User: {item.user}</div>
        <div>Message: {item.msg}</div>
      </div>
    ));

    return <div>
      <h3>Chat info</h3>
      <div>
        <p>Status: {this.props.status}</p>
        <p>UserName: {this.props.userName}</p>
      </div>

      <div>
        <h4>Update info</h4>
        <div>
          <div>
            <input type="text" value={this.state.userName}
                   onChange={this.updateUserName.bind(this)}/>
            <input type="button" onClick={this.changeUserName.bind(this)}
                   value='Change User Name'/>
          </div>
          <div>
            <input type="text" value={this.state.status}
                   onChange={this.updateStatus.bind(this)}/>
            <input type="button" onClick={this.changeStatus.bind(this)}
                   value='Change Status'/>
          </div>
          <div>
            <input type="text"
                   value={this.state.message}
                   onChange={this.updateMessage.bind(this)}
                   onKeyPress={this._handleKeyPress.bind(this)}/>
            <input type="button" onClick={this.addMessage.bind(this)}
                   value='Add message'/>
          </div>
          {items}
        </div>
      </div>
    </div>
  }
}

Chat.defaultProps = {};

export default Chat;
