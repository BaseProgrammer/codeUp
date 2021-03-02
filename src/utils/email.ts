import * as dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config({
    path: `${__dirname}/../.env.development`
});

export default function (emails: string) {

    const transport = nodemailer.createTransport({

        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: process.env.USERNAME,
            pass: process.env.PASSWORD,
        },

    });

    for (let i = 0; i < emails.length; i++) {

        transport.sendMail({

            from: "\"codeUp\" <9b02540a63-5cfcad@inbox.mailtrap.io>",
            to: emails[i],
            subject: "CodeUp Challenge",
            html: "" // Can't be bothered coding => get each file contents of the html/ dir and use that as this

        }, function (error, info) {

            if (error) return console.error(error)

            console.log("sent email with msgId %s", info.messageId)

        });

    }

}