import * as functions from 'firebase-functions'
import { SendMailOptions, createTransport } from 'nodemailer'

const transporter = createTransport({
  host: 'smtpout.secureserver.net', // GoDaddy's SMTP server
  secure: true,
  port: 465,
  auth: {
    user: functions.config().email.user,
    pass: functions.config().email.pass,
  },
})

export const sendMail = functions.https.onRequest(
  (req: functions.Request, res: functions.Response) => {
    const mailOptions: SendMailOptions = {
      from: 'no-reply@naomikrispel.com',
      to: functions.config().email.user,
      replyTo: req.body.email,
      subject: req.body.subject,
      text: req.body.message,
    }

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error)
        res.send('error' + JSON.stringify(error))
      } else {
        console.log('Email sent: ' + info.response)
        res.send('Email sent: ' + info.response)
      }
    })
  }
)
