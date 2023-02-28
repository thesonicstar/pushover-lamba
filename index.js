var Push = require('pushover-notifications');

exports.handler = function(event, context) {

    var p = new Push( {
      user: process.env['PUSHOVER_USER'],
      token: process.env['PUSHOVER_TOKEN']
    });
    
    var snsMessage = event.Records[0].Sns.Message;
  
    var alertSubject = snsMessage.Subject;
    var alertTime = snsMessage.Timestamp;
    var alertMessage = snsMessage; 

    var msg = {
      title: alertSubject,
      message: alertMessage,
      priority: 2,
      retry: 30,
      expire: 300,
      timestamp: alertTime,
      url_title: "AWS notifications"
    };

    p.send( msg, function( err, result ) {
      if ( err ) {
        throw err;
      }
    });

};
