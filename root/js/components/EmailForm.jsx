import React from 'react';

import $ from 'jquery';

export default class EmailForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', sendTo: '', subject: '', message: ''};

    this.handleSendToChange = this.handleSendToChange.bind(this);
    this.handleSubjectChange = this.handleSubjectChange.bind(this);
  }

  componentDidMount() {
    var self = this;

    $('#submitButton').click(self.handleSubmit)
  }

  handleSendToChange(event) {
    this.setState({sendTo: event.target.value});
  }

  handleSubjectChange(event) {
    this.setState({value: subject.target.value});
  }

  handleMessageChange(event) {
    this.setState({message: event.target.value});
  }

  handleSubmit(event) {
    var messageBody = document.getElementById('messageBody').value;
    //sweet, now I have the messageBody next that was typed in the textarea element
    //now I need to use it and send it to the server so that an email can be sent

    alert('Email was submittedsdfgsdfg: ' +  messageBody);



    //todo - finish this
    //What I probably need to do now is create a hidden form for
    //this page and use it to do a post when needing to send the
    //email on the node.js side of things rather than sending
    //this in the client


    event.preventDefault();
  } 

  render() {
    return (
      <div id="divFormId">
        <label style={styles.labelStyle}>
          Send To:
          <input style={styles.sendTo} type="text" value={this.state.sendTo} onChange={this.handleSendToChange} />
          
          <br />

          Subject:
          <input style={styles.subject} type="text" value={this.state.subject} onChange={this.handleSubjectChange} />
        
          <br />

          Message Body:
          {/*<input style={styles.messageBody} type="text" value={this.state.message} onChange={this.handleMessageChange} />*/}
          <textarea id="messageBody"></textarea>
        </label>
        
        <br />

        <button id="submitButton" style={styles.submit}>Send</button>

        <br />

        
      </div>
    );
  }
}



var styles = {
  labelStyle: {
    fontSize: 20,
    color: 'white'
  },
  sendTo: {
    marginBottom: 5
  },
  subject: {
    marginBottom: 5
  },
  messageBody: {
    marginBottom: 5
  },
  submit: {
    cursor: 'pointer'
  }
}
