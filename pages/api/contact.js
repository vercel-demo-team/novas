import nodemailer from "nodemailer"
import axios from 'axios';

const emailPass = ""
const emailAddress = ""
const sendToEmail = ""

const HCAPTCHA_KEY = ""
const HCAPTACHA_VERIFY_URL = ""
const HCAPTACHA_SITE_KEY = ""


const transporter = nodemailer.createTransport({
    host: "ssl0.ovh.net",
    secure: false,
    port: 587,
    auth: {
        user: emailAddress,
        pass: emailPass
    },
    tls:{
        ciphers:'SSLv3'
    }
})

async function verifySender(token) {
    return await axios.post(HCAPTACHA_VERIFY_URL, {
        'secret': HCAPTCHA_KEY,
        'response': token,
        'sitekey': HCAPTACHA_SITE_KEY
    });
}

export default async (req, res) => {
    const {name, email, tel, message, token} = req.body

    // Check if fields are all filled
    if (name === "" || (email === "" && tel === "") || message === "" || token === "") {
        res.status(403).send({"error": "missing required values"})
    }

    try {
        const mailerRes = await mailer({ email, name, tel, message});
        const verifyResp = await verifySender(token);

        if (verifyResp.data['succsess'] === true) {
            const mailerRes = await mailer({ email, name, tel, message})
            res.send("success");
        }
        else {
            res.status(403).send({"error": "wrong token"});
        }


    } catch (error) {
        console.error(error);
        //TODO handle it
    }

}

const mailer = ({email, name, tel, message}) => {
    const body = `Nom: ${name}\nEmail: ${email}\nTel: ${tel}\n \nmessage: ${message}`
    const emailInfo = {
        from: emailAddress,
        to: sendToEmail,
        subject: `[Site]: Nouveau contact de ${name}`,
        text: body,
        reply: email
    }

    return new Promise((resolve, reject) => {
        transporter.sendMail(emailInfo, (error, info) =>
            error ? reject(error) : resolve(info)
        )
    })
}
