# Chatroom

Simple chatroom application using NodeJS + React + Redux  socketio

I made this application to practice my react lessons in 2017, it's not uptodate. Feel free to use it, read the code, optimise, all you want with this repo !

# Features

* By default you have a random username
* Change username.
* Send messages to all connected users.
* Send private message typing `/w ${username}` before your message.
* Display of `${users} are typing...`
* Display of all users connected

![resultat](docs/screen.png)

# Run application

* `yarn install` for install dependencies
* `yarn start:server` for run back server
* `yarn start` for run front application

# Some possible improvements

If you want practice using this base code you can add :

* Stock messages in back server for allow persist messages (like 100 latest for not surcharged server)
* Add timestamp to each message
* If you click on username it could be insert `/w ${thisUsername} to the input message

[Licence](LICENSE)
