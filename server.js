import 'dotenv/config'
import express from 'express'
import ViteExpress from 'vite-express'

import expressSanitizer from 'express-sanitizer'

ViteExpress.config({ mode: 'development' })

import nodemailer from 'nodemailer'
import mg from 'nodemailer-mailgun-transport'

const app = express()
app.use(express.json())
app.use(expressSanitizer())

const port = process.env.PORT

const emailAuth = {
  auth: {
    api_key: process.env.MAILGUN_API_KEY,
    domain: 'sandbox997a6f749fd045849a4387fef6ad6ea4.mailgun.org',
  },
}

const nodemailerMailgun = nodemailer.createTransport(mg(emailAuth))

const sendEmail = (firstName, lastName, email, phoneNumber, message) => {
  nodemailerMailgun.sendMail(
    {
      from: 'portfolio@chanceconway.com',
      to: 'chanceconwaydev@gmail.com',
      subject: 'New contact form submission',
      html: `
      <p>${firstName} ${lastName}</p>
      <p>${email}</p>
      <p>${phoneNumber}</p>
      <p>${message}</p>
      `,
    },
    (err, info) => {
      if (err) {
        console.log(err)
      } else {
        console.log(info)
      }
    }
  )
  console.log('email attempted to send')
}

app.post('/', (req, res) => {
  const sanitizedData = {
    firstName: req.sanitize(req.body.firstName),
    lastName: req.sanitize(req.body.lastName),
    email: req.sanitize(req.body.email),
    phoneNumber: req.sanitize(req.body.phoneNumber),
    message: req.sanitize(req.body.message),
  }
  const { firstName, lastName, email, phoneNumber, message } = sanitizedData
  console.log(firstName)
  sendEmail(firstName, lastName, email, phoneNumber, message)
  console.log('post reached')
})

ViteExpress.listen(app, port, () => console.log('Server is listening on PORT ' + port))
