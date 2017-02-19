import React from 'react';

import $ from 'jquery';

var self;

export default class StaticEmailForm extends React.Component {
  // constructor(props) {
  // }

  componentDidMount() {

  }


  render() {
    return (
      <div id="divFormId">
        {/*
        <form action="https://formspree.io/cotyembry@gmail.com" method="POST">
            <input type="text" name="subject" />
            <input type="email" name="message" />
            <input type="submit" value="Send" />
        </form>
        */}

      </div>
    )
  }

  send() {
    //TODO: get this working

    // var api_key = 'key-XXXXXXXXXXXXXXXXXXXXXXX';
    // var domain = 'www.mydomain.com';
    // var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
     
    // var data = {
    //   from: 'Excited User <me@samples.mailgun.org>',
    //   to: 'serobnic@mail.ru',
    //   subject: 'Hello',
    //   text: 'Testing some Mailgun awesomness!'
    // };
     
    // mailgun.messages().send(data, function (error, body) {
    //   console.log(body);
    // });
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
    width: 280,
    height: 50,
    fontSize: 33,
    marginBottom: 5,
    // float: 'right'
  },
  messageBody: {
    width: 200,
    height: 200,
    fontSize: 30,
    marginBottom: 5
  },
  submit: {
    cursor: 'pointer',
    fontSize: 18
  }
}
