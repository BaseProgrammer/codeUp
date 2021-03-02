import db from "quick.db"

db.set("storage", { /* Empty JSON */ });

export function addEmail(email: string) {

    if (!email) throw new TypeError("email not given");

    db.push("storage.emails", email);

}

export function fetchEmails() {

    return db.fetch("storage.emails")

}