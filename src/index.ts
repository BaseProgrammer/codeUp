import sendEmail from "./utils/email";
import { addEmail, fetchEmails } from "./utils/db"

var loop = true;

do {

    let _currentDate = new Date();
    let currentDate = `${_currentDate.getHours()}.${_currentDate.getMinutes()}.${_currentDate.getSeconds()}`
    // 23.59.59

    if (currentDate == "23.59.59") {
        
        sendEmail(fetchEmails());
        // Sends email to array of emails

    }

} while (loop);