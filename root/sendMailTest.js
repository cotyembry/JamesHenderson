//this will send an email using nodemailer

// var nodemailer = require('nodemailer');


var sendMail = {
    handleSend: function(toRecipient, subject, messageBody) {


        var transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'sovereignchickamaugacherokee@gmail.com', // Your email id
                pass: 'securePassword2016' // Your password
            }
        });


        // The below works
        //
        // var mailOptions = {
        //     from: 'sovereignchickamaugacherokee@gmail.com', // sender address
        //     to: 'cotyembry@gmail.com', // list of receivers
        //     subject: 'Email Example', // Subject line
        //     text: 'Dude this just worked...' //, // plaintext body
        //     // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
        // };

        var mailOptions = {
            from: 'sovereignchickamaugacherokee@gmail.com', // sender address
            to: toRecipient, // list of receivers
            subject: subject, // Subject line
            text: messageBody //, // plaintext body
            // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
        };

        //now to actually send the email
        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                console.log(error);
                // res.json({yo: 'error'});
            }else{
                console.log('Message sent: ' + info.response);
                // res.json({yo: info.response});
            };
        });


    }



/*
    I will leaved the code below as just an example on how to get a post request to work

    <html>
      <body>

      <button onclick="document.getElementById('form').submit()">click me</button>

      <form id="form" name="name" value="Johnny Bravo"></form>
      
      </body>
    </html>

    If the button is clicked, it will perform a post request (I think) using the form

*/


module.exports = sendMail;
