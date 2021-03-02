# CodeUp
This is a project that is still under development; what this does is that once you link up some way to add subscription emails to the database (you can make this into an API in with the **(express.js)[http://expressjs.com/]** framework and allow people to subsribe themselves to the emails), people can recieve daily emails for the daily code (for them to solve).

# How does it work?
Since this is running on Node.js to run the Typescript files, it can be used as a backend server where once there are emails in the `sqlite3` file database, it will send daily emails, this timing process will be explained thoroughly @ `root /docs/Timings.md `

## Developer's Message:
I would've made this into a full time working subscription if I could find a server or VPS where I can start a `SMTP` server (for sending emails) and host this as a backend website on Heroku; however, if I do, this would still be public and open-source for developers to help build on.