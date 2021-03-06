var express = require('express');
var router = express.Router();
var nodemailer = require("nodemailer");
var indexConstants = require('../views/constants/index.constants');
var projectsConstants = require('../views/constants/projects.constants');
var aboutMeConstants = require('../views/constants/aboutMe.constants');
var contactConstants = require('../views/constants/contact.constants');

// Router handler for home page
router.get('/', function (req, res, next) {
  res.render('index', indexConstants);
});

// Router handler for projects page
router.get('/projects', function (req, res, next) {
  res.render('projects', projectsConstants);
});

// Router handler for about me page
router.get('/aboutMe', function (req, res, next) {
  res.render('aboutMe', aboutMeConstants);
});

// Router handler for contact page, also handling states for view if contact form submission is successful or not
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

// Router handler for posting (submitting) contact form
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
      to: "wenogk@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "New Message", // plain text body
      html: fullMsg, // html body
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