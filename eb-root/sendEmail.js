//this will send an email using nodemailer

var nodemailer = require('nodemailer');


function handleSayHello(req, res) {
    // Not the movie transporter!
    console.log('in post function callback');

    
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'sovereignchickamaugacherokee@gmail.com', // Your email id
            pass: 'securePassword2016' // Your password
        }
    });


    var mailOptions = {
        from: 'sovereignchickamaugacherokee@gmail.com', // sender address
        to: 'cotyembry@gmail.com', // list of receivers
        subject: 'Email Example', // Subject line
        text: 'Dude this just worked...' //, // plaintext body
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


handleSayHello();