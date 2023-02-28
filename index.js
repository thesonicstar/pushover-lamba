var Push = require('pushover-notifications');

exports.handler = function(event, context) {

    var p = new Push( {
      user: process.env['PUSHOVER_USER'],
      //user: "uxotm74t6syz5wh4u9ypa9nqp6p6n1R",
      token: process.env['PUSHOVER_TOKEN']
      //token: "amwi2qymxzetx45kiwh8138jjeusx6"
    });
    
    console.log('Received event:', JSON.stringify(event, null, 4));
    //var snsMessage = JSON.parse(event.Records[0].Sns.Message);
    var snsMessage = event.Records[0].Sns.Message;
     console.log('Message received from SNS:', snsMessage);
  
    var alertSubject = snsMessage.Subject;
    var alertTime = snsMessage.Timestamp;
    var alertMessage = snsMessage; //+ "\n" + snsMessage.NewStateReason + "\n" + snsMessage.Trigger.MetricName + " " + snsMessage.Trigger.Namespace;

    var msg = {
      title: alertSubject,
      message: alertMessage,
      priority: 2,
      retry: 30,
      expire: 300,
      timestamp: alertTime,
      //url: "https://<link to rebbot server via API>",
      url_title: "AWS notifications"
    };

    p.send( msg, function( err, result ) {
      if ( err ) {
        throw err;
      }
    });

};