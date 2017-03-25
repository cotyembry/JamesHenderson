//Copyright 2013-2014 Amazon.com, Inc. or its affiliates. All Rights Reserved.
//Licensed under the Apache License, Version 2.0 (the "License"). 
//You may not use this file except in compliance with the License. 
//A copy of the License is located at
//
//    http://aws.amazon.com/apache2.0/
//
//or in the "license" file accompanying this file. This file is distributed 
//on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, 
//either express or implied. See the License for the specific language 
//governing permissions and limitations under the License.

//Get modules.
var express = require('express');
express.static.mime.define({
    'text/css': ['css']
});

var routes = require('./routes');

var http = require('http');
var path = require('path');
var fs = require('fs');
//var AWS = require('aws-sdk');
var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.locals.theme = process.env.THEME; //Make the THEME environment variable available to the app. 

//Read config values from a JSON file.
var config = fs.readFileSync('./app_config.json', 'utf8');
config = JSON.parse(config);



//define the modules Ill be using for the email feature
var nodemailer = require('nodemailer');

var emailAddressToSendTo = 'cotyembry@gmail.com';
// var emailAddressToSendTo = 'CHIEFAMCKAY@gmail.com';

//the sendEmail object will do the work to get the email to be send when necessary (I should make this more modular something later in the future)
var sendEmail = {
    send: function(request) {

        var transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'sovereignchickamaugacherokee@gmail.com', // Your email id
                pass: 'securePassword2016' // Your password
            }
        });


        var mailOptions = {
            from: 'sovereignchickamaugacherokee@gmail.com', // sender address
            to: emailAddressToSendTo, // list of receivers
            subject: request.body.subject, // Subject line
            text: request.body.messageBody //, // plaintext body
            // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
        };

        //now to actually send the email
        transporter.sendMail(mailOptions, function(error, info) {
            if(error){
                console.log(error);
                //todo, add error tracking
            }else{
                console.log('Message sent: ' + info.response);
                // res.json({yo: info.response});
            };
        });
        
    }
}


app.post('/send', function(req, res) {

	//send the email now
	sendEmail.send(req);

    //then render the contact us page again
    // res.render('contact', { appTitle: "Sovereign Chickamauga Cherokee" });
    
    //I changed this to .redirect because it keeps the url in sync. I would like to not respond, but I haven't looked up how to do that yet
    res.redirect('/#/contact');
})


//TODO:    add donation info like the Ouashita has. Maybe paypal or something 




//begin routing section


//GET home page.
// app.get('/', routes.home);

//start Coty added 12-22-2016
// app.get('/application', routes.application);
// app.get('/beliefs', routes.beliefs);
// app.get('/contact', routes.contact);
// app.get('/history', routes.history);
app.get('/', routes.home);
// app.get('/tribaladministration', routes.tribaladministration);
//end


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
