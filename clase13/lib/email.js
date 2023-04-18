const nodemailer = require("nodemailer");

const correoOrigen = "lcascante@ucenfotec.ac.cr";

const smtpOptions = {
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: correoOrigen,
    pass: "cgyzixkrlutysmxb",
  },
};

async function sendEmail(datosCorreo) {
  console.log("Enviando correo", datosCorreo);
  const transporter = nodemailer.createTransport({ ...smtpOptions });
  const { correo, password } = datosCorreo;

  try {
    await transporter.sendMail({
      from: correoOrigen,
      subject: "Datos de registro SICA",
      to: correo,
      html: `
        <h1>Bienvenido a SICA</h1>
        <p>Estimado usuario, su información de inicio de sesión es:</p>
        <p>Usuario: <strong>${correo}</strong></p>
        <p>Contraseña: <strong>${password}</strong></p>
      `,
    });
  } catch (error) {
    console.error(error);
  }
}

module.exports = sendEmail;
