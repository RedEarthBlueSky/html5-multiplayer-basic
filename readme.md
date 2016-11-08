
####HTML5 Basic Multiplayer Game

Taken from the tutorial series

https://www.youtube.com/watch?v=Fn03ucDEcb4

http://rainingchain.com/tutorial/nodejs

**Basic Communications**

File communications (Express)
    Client asks the server ***for*** a file (Ex:  playerImg.png)

The file is represented by a URL
        mywebsite.com     :3000     /client/playerImg.png
URL =   DOMAIN            PORT      PATH (location on server)
        laptop            usbport   query

The **query** takes place after the port - the file extension


Package communication (Socket.io)
    Client sends data to server (Ex: Input)
    Server sends data to client (Ex: Monster position)


**nodemon 'entryfile.js' allows us to listen and refresh
