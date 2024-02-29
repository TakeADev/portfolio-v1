import 'dotenv/config'
import express from 'express'
import ViteExpress from 'vite-express'

ViteExpress.config({ mode: 'development' })

import nodemailer from 'nodemailer'
import mg from 'nodemailer-mailgun-transport'

const app = express()
app.use(express.json())

const port = process.env.PORT

const emailAuth = {
  auth: {
    api_key: process.env.MAILGUN_API_KEY,
    domain: 'sandbox997a6f749fd045849a4387fef6ad6ea4.mailgun.org',
  },
}

const nodemailerMailgun = nodemailer.createTransport(mg(emailAuth))

const sendEmail = () => {
  nodemailerMailgun.sendMail(
    {
      from: 'portfolio@chanceconway.com',
      to: 'chanceconwaydev@gmail.com',
      subject: 'test subject',
      text: 'This is the thest message',
    },
    (err, info) => {
      if (err) {
        console.log(err)
      } else {
        console.log(info)
      }
    }
  )
}

app.post('/email', (req, res) => {
  console.log('ok')
  res.redirect('/')
})

ViteExpress.listen(app, port, () => console.log('Server is listening on PORT ' + port))
