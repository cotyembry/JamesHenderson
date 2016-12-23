import React from 'react';

import $ from 'jquery';

var self;

export default class EmailForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', sendTo: '', subject: '', message: ''};

    this.handleSendToChange = this.handleSendToChange.bind(this);
    this.handleSubjectChange = this.handleSubjectChange.bind(this);
    this.handleSubjectChange = this.handleMessageChange.bind(this);
  }

  componentDidMount() {
    self = this;

    // $('#submitButton').click(self.handleClick);
  }

  handleSendToChange(event) {
    this.setState({sendTo: event.target.value});
  }

  handleSubjectChange(event) {
    console.log('in handleSubjectChange')

    this.setState({subject: event.target.value});
  }

  handleMessageChange(event) {
    this.setState({message: event.target.value});
  }

  handleClick(event) {


    console.log('yo event', event)


    var messageBody = document.getElementById('messageBody').value;
    //sweet, now I have the messageBody next that was typed in the textarea element
    //now I need to use it and send it to the server so that an email can be sent

    console.log('Email was submitted: ' +  messageBody);

  


    //todo - finish this
    //What I probably need to do now is create a hidden form for
    //this page and use it to do a post when needing to send the
    //email on the node.js side of things rather than sending
    //this in the client

    self.post('/send', {name: 'Johnny Bravo'});



    event.preventDefault();
  }
  post(path, params, method) {
        method = method || "post"; // Set method to post by default if not specified.

        // The rest of this code assumes you are not using a library.
        // It can be made less wordy if you use one.
        var form = document.createElement("form");
        form.setAttribute("method", method);
        form.setAttribute("action", path);

        for(var key in params) {
            if(params.hasOwnProperty(key)) {
                var hiddenField = document.createElement("input");
                hiddenField.setAttribute("type", "hidden");
                hiddenField.setAttribute("name", key);
                hiddenField.setAttribute("value", params[key]);

                form.appendChild(hiddenField);
             }
        }

        document.body.appendChild(form);
        form.submit();
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

        <button id="submitButton" style={styles.submit} onClick={this.handleClick}>Send</button>

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
