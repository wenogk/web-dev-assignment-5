var express = require('express');
var router = express.Router();
var nodemailer = require("nodemailer");
var indexConstants = require('../views/constants/index.constants');
var portfolioConstants = require('../views/constants/portfolio.constants');
var resumeConstants = require('../views/constants/resume.constants');
var contactConstants = require('../views/constants/contact.constants');
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', indexConstants);
});

router.get('/resume', function (req, res, next) {
  res.render('resume', resumeConstants);
});

router.get('/portfolio', function (req, res, next) {
  res.render('portfolio', portfolioConstants);
});

router.get('/contact', function (req, res, next) {
  let fields = {
    ...contactConstants
  }
  if (req.query.formStatus != null) {
    if (req.query.formStatus == "success") {
      fields['formStatusSuccess'] = true
    } else if (req.query.formStatus == "fail") {
      fields['formStatusFail'] = true
    }
  }
  res.render('contact', fields);
});

router.post('/contact', function (req, res, next) {

  let name = req.body.name;
  let email = req.body.email;
  let msg = req.body.msg;

  let fullMsg = `Name: ${name} <br /> Email: ${email} <br /> Message: ${msg}`
  nodemailer.createTestAccount().then((testAccount) => {

    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass, // generated ethereal password
      },
    });

    transporter.sendMail({
      from: '"Fred Foo 👻" <foo@example.com>', // sender address
      to: "bar@example.com, baz@example.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    }).then((res2) => {
      res.redirect('/contact?formStatus=success');
    }).catch((err2) => {
      res.redirect('/contact?formStatus=fail');
    })
  }).catch((err) => {
    res.redirect('/contact?formStatus=fail');
  })
})

module.exports = router;