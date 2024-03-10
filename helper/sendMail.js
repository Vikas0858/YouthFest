const nodemailer = require("nodemailer");

const mailUser = process.env.MAIL_USERNAME;
const mailPass = process.env.MAIL_PASSWORD;
const clientId = process.env.OAUTH_CLIENTID;
const clientSecret = process.env.OAUTH_CLIENT_SECRET;
const refreshToken = process.env.OAUTH_REFRESH_TOKEN;

const SendMail = async (
  email,
  subject,
  htmlBody,
  onSuccess,
  onError,
  ccList = "",
  bccList = ""
) => {
  let transporter = await nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: mailUser,
      pass: mailPass,
      clientId: clientId,
      clientSecret: clientSecret,
      refreshToken: refreshToken,
    },
  });

  //   let mailOptions = {
  //     from: `"VSS/Think India" <${mailUser}>`,
  //     to: email,
  //     cc: ccList,
  //     bcc: bccList,
  //     subject: subject,
  //     html: htmlBody,
  //   };xssx

  //   transporter.sendMail(mailOptions, function (err, data) {
  //     if (err) {
  //       onError(err);
  //     } else {
  //       onSuccess();
  //     }
  //   });
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou..
};

module.exports = SendMail;
