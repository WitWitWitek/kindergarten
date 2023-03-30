import type { NextApiRequest, NextApiResponse } from 'next'
import { transporter } from '@/lib/nodemailer';
import DOMPurify from 'isomorphic-dompurify';

type ResponseMessage = {
  message?: string,
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseMessage>
) {
    if (req.method === 'POST') {
        const { name, email, subject, text } = req.body;
        if (!name || !email || !subject || !text) {
            return res.status(400).json({ message: "Bad request"});
        }
        try {
            const cleanedName = DOMPurify.sanitize(name)
            const cleanedEmail = DOMPurify.sanitize(email)
            const cleanedSubject = DOMPurify.sanitize(subject)
            const cleanedText = DOMPurify.sanitize(text)
            await transporter.sendMail({
                from: process.env.EMAIL,
                to: process.env.RECIPENT_EMAIL,
                subject: cleanedSubject,
                text: 'This is a text string',
                html: createContent({name: cleanedName, email: cleanedEmail, subject: cleanedSubject, text: cleanedText})
            })
            return res.status(200).json({ message: "Message succesfully sent" });
        } catch (err: any) {
            console.log(err);
            return res.status(400).json({ message: err.message })
        }

    }
    res.status(400).json({ message: "Bad request" });
}


function createContent({name, email, subject, text}: { name: string, email: string, subject: string, text: string }) {
    return `
            <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <style>
        </style>
        <body>
            <main>
                <h1>Otrzymałeś wiadomość ze strony Puchatek.pl</h1>
                <section>
                    <h3>Nazwisko:</h3>
                    <p>${name}</p>
                    <h3>Email:</h3>
                    <p>${email}</p>
                    <h3>Temat:</h3>
                    <p>${subject}</p>
                    <h3>Opis:</h3>
                    <p>${text}</p>
                </section>
            </main>
        </body>
        </html>
    `
}