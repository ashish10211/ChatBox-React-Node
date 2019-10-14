import React , { Component} from 'react';
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';

import './styles.css';

import user from './telemarketer.png';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
      returnMessage:'This is dummy message',
    };
        
    }
          messageResponse() {
            fetch("http://localhost:9000/api")
                .then(res => res.text())
                .then(res => this.setState({ returnMessage: res }))
                .catch(err => err);
                addResponseMessage(this.state.returnMessage);
        }

  componentDidMount() {
    this.messageResponse();
  }

  handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`); 
    fetch('http://localhost:9000/api', {
  method: 'POST',
   mode: "cors",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    message:newMessage,
  })
})
    this.messageResponse();
  }

  render() {
    return (
      <div className="App">
        <Widget
          handleNewUserMessage={this.handleNewUserMessage}
          profileAvatar={user}
          title="React ChatBox"
          subtitle="UserName"
        />
      </div>
    );
  } 
}

export default App;
