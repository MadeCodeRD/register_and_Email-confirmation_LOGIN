const nodemailer = require('nodemailer');

const mail = {
    user: 'ulises62@ethereal.email',
    pass: 'Dvcn7we1MYwzcYYjXy'
}

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: mail.user,
        pass:  mail.pass
    }
});

  const sendEmail = async (email, subject, html) => {
    try {
        
        await transporter.sendMail({
            from: `MadeCodeRD <${ mail.user }>`, // sender address
            to: email, // list of receivers
            subject, // Subject line
            text: "Thank you for joining!", // plain text body
            html, // html body
        });

    } catch (error) {
        console.log('Algo no va bien con el email', error);
    }
  }

  const getTemplate = (name, token) => {
      return `
        <head>
            <link rel="stylesheet" href="./style.css">
        </head>
        
        <div id="email___content">
            <img src="https://i.imgur.com/eboNR82.png" alt="">
            <h2>Hola ${ name }</h2>
            <p>Para confirmar tu cuenta, ingresa al siguiente enlace</p>
            <a
                href="http://localhost:4000/api/user/confirm/${ token }"
                target="_blank"
            >Confirmar Cuenta</a>
        </div>
      `;
  }

  module.exports = {
    sendEmail,
    getTemplate
  }