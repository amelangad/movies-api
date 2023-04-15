import express from 'express';
import nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';
dotenv.config();
//import bodyParser from 'body-parser';
import multer from 'multer'
const upload = multer();
const app = express()

const PORT = process.env.PORT || 3000

console.log(process.env)
//Middleweare

app.use(upload.array());


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.get('/', (req, res) => {
  res.send('hej')
  console.log('hej')
})


app.post('/', function (req, res) {
  console.log(JSON.parse(JSON.stringify(req.body.email)));
  res.send('hej');

  async function main() {

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // use TLS
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    }})

await transporter.sendMail({
    from: req.body.email,
    to: 'test888magmar@gmail.com',
    subject: `Message from ${req.body.email}`,
    text: req.body.msg,
  })
}


  main().catch(console.error);
})


app.listen(PORT, () => {
  console.log('server run on port 3000 ')
})
