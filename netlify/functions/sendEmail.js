import sgMail from '@sendgrid/mail';

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const TO_EMAIL = process.env.TO_EMAIL;
const FROM_EMAIL = process.env.FROM_EMAIL || 'no-reply@perritos-site.netlify.app';

if (!SENDGRID_API_KEY) {
  console.error('SENDGRID_API_KEY no está configurada en las variables de entorno');
}

sgMail.setApiKey(SENDGRID_API_KEY);

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  if (!SENDGRID_API_KEY || !TO_EMAIL) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Missing configuration: set SENDGRID_API_KEY and TO_EMAIL in Netlify env vars' }),
    };
  }

  let data;
  try {
    data = JSON.parse(event.body);
  } catch (err) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid JSON' }) };
  }

  const { nombre = 'Sin nombre', correo = 'Sin correo', asunto = 'Nuevo mensaje', mensaje = '' } = data;

  const subject = `Contacto: ${asunto}`;
  const text = `Nombre: ${nombre}\nCorreo: ${correo}\n\nMensaje:\n${mensaje}`;
  const html = `<p><strong>Nombre:</strong> ${nombre}</p><p><strong>Correo:</strong> ${correo}</p><p><strong>Asunto:</strong> ${asunto}</p><p><strong>Mensaje:</strong><br/>${mensaje.replace(/\n/g, '<br/>')}</p>`;

  const msg = {
    to: TO_EMAIL,
    from: FROM_EMAIL,
    subject,
    text,
    html,
    replyTo: correo,
  };

  try {
    await sgMail.send(msg);
    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  } catch (err) {
    console.error('SendGrid error:', err);
    return { statusCode: 500, body: JSON.stringify({ error: 'send_failed', details: err.message || err }) };
  }
};
