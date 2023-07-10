import { ContactFormValues } from './../../firebase.functions.types'
import { onRequest } from 'firebase-functions/v2/https'
import { SendMailOptions, createTransport } from 'nodemailer'
import { RequestWithBody } from '../types'

const transporter = createTransport({
  host: 'smtpout.secureserver.net', // GoDaddy's SMTP server
  secure: true,
  port: 465,
  auth: {
    user: process.env.AUTH_EMAIL,
    pass: process.env.AUTH_PASS,
  },
})

export const sendMail = onRequest(
  { cors: false }, //TODO: change
  (req: RequestWithBody<ContactFormValues>, res) => {
    const mailOptions: SendMailOptions = {
      from: 'contact@naomikrispel.com',
      to: 'naomi@naomikrispel.com',
      replyTo: req.body.email,
      subject: `${req.body.subject} | ${req.body.name}`,
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
