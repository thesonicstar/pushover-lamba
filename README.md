![Pushover](https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_92d1a94d84a357f825e6e94866950d27/pushover.png)

# *Pushover notification with AWS*

Send [Pushover](https://https://pushover.net/) notifications using Node.JS within a Lambda function in AWS

This can be used in conjuction with AWS Simple Notification Service (SNS)

## Example payload message

```
    var msg = {
      title: alertSubject,
      message: alertMessage,
      priority: 2,
      retry: 30,
      expire: 300,
      timestamp: alertTime,
      url: "https://<link to site>",
      url_title: "AWS notifications"
    };
```
The priority variable is key.  Normal messages are **priority 0**, but these messages are treated as non-urgent and won’t come through when Do Not Disturb mode is turned on the mobile device.

**Priority 1** messages are marked ‘critical’ and WILL come through, but **priority 2** messages are deemed ‘critical’ AND will also persist until they are acknowledged by the recipient.

For **priority 2** messages, you also have to specify the retry period (which I set to 30 seconds) and the expire period (which I set to 5 minutes, or 300 seconds).  This means that if you don’t acknowledge the message, it will keep pinging you every 30 seconds for up to 5 minutes.  
