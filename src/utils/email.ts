import * as dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config({
    path: `${__dirname}/../.env.development`
});

const data:object = {

    from: "\"codeUp\" <9b02540a63-5cfcad@inbox.mailtrap.io>",
    to: "",
    subject: "CodeUp Challenge",
    html: ""

};

export function sendEmail() {

    const transport = nodemailer.createTransport({

        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: process.env.USERNAME,
            pass: process.env.PASSWORD,
        },
    
    });

    transport.sendMail(data, (error, info) => {
        //
    });

}


export class emailManager { /* ... not in use */ }