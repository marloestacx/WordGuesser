# Word Guesser
Guess the right word with your friends or strangers

## Table of contents
* [Concept](https://github.com/marloestacx/WordGuesser#concept)
* [Features](https://github.com/marloestacx/WordGuesser#features)
* [Installation](https://github.com/marloestacx/WordGuesser#installation)
* [Live Demo](https://github.com/marloestacx/WordGuesser#live-demo)
* [Datamodel](https://github.com/marloestacx/WordGuesser#datamodel)
* [Data Life Cycle](https://github.com/marloestacx/WordGuesser#data-life-cycle)
* [API](https://github.com/marloestacx/WordGuesser#API)
* [Real-Time Events](https://github.com/marloestacx/WordGuesser#Real-Time-Events)
* [Checklist](https://github.com/marloestacx/WordGuesser#checklist)
* [Sources](https://github.com/marloestacx/WordGuesser#sources)
* [License](https://github.com/marloestacx/WordGuesser#license)

## Concept
The concept is an online word guesser game. You see a definition on the screen and have to guess the word by typing in the chat. 

![IMG_3536](https://user-images.githubusercontent.com/24413936/167620531-f1f166e1-d407-4250-8f23-b47b71b857bb.jpg)


## Features
In the game, you can guess the word by reading the definition. You can see who's online and chat with each other while you try to guess the correct word.

![Schermafbeelding 2022-05-10 om 13 02 53](https://user-images.githubusercontent.com/24413936/167616068-f426e1a2-3e7c-41e7-bebd-b2e1556c9a3e.png)

## Installation 
Clone this repository

```
https://github.com/marloestacx/WordGuesser.git
```

Install the packages
```
npm install
```

Start the app
```
npm start
```

## Live Demo
The website can be viewed live on [https://wordguesser-rtw.herokuapp.com](https://wordguesser-rtw.herokuapp.com)

## Datamodel

![datamodel](https://user-images.githubusercontent.com/24413936/167616269-1ed3fa34-f26b-4407-8b62-9657b92b68a6.png)


## Data Life Cycle

![datalifecycle](https://user-images.githubusercontent.com/24413936/167631606-04a3635a-95a0-4f2d-8169-aca7f1bba317.png)


## API
For this project, I use the [Urban Dictionary API](https://rapidapi.com/community/api/urban-dictionary). This API stores all definitions which are hosted on the Urban Dictionary website.

### What I used
From this API I use the **definition** and **word**

### Key
I used [RapidAPI](https://rapidapi.com/community/api/urban-dictionary) to get a key for this project. RapidAPI will give you a code snippet which you can use in your project. 

### Response 
```js
 list: [
    {
      definition: "The coolest person in the world. He's the kind of person who everyone worships. There is [ofcourse] also the Church of Hans and the Korhans in which are described [the awesome] stories of Hans. He created the earth and should be worshipped by everyone. If you don't worship him, you will [go to Hell], or worse, you will never be able to know a guy named Hans!",
      permalink: 'http://hans.urbanup.com/3852085',
      thumbs_up: 672,
      sound_urls: [Array],
      author: 'Person1337squared',
      word: 'Hans',
      defid: 3852085,
      current_vote: '',
      written_on: '2009-04-01T13:45:21.000Z',
      example: 'Oh my Hans!\r\n' +
        'Hansdamnit!\r\n' +
        'Hans created the earth in less then [7 days], [beat that] [Christians]!',
      thumbs_down: 311
    }
   ]
```

## Real-Time Events

### registerName
This event is triggered by the connection event. On the server side, the username gets pushed into the usernames array. This will trigger the online event and show all online users. 


### newDefinition
This event is triggered when someone clicks on the "new definition" button. On the server side, a new word get fetched from the API. Because the API gets 10 words on each call, it picks one of the words and puts this in an array. If the word is guessed correctly, this word gets deleted. On the client side, this definition get's shown to all users. 

### Message
This event is triggered when a message is sent. The event checks on the server side if the message has the correct answer, if this is true it will send an extra message that this is the correct answer and give the answer a green background. If it is not the correct answer, it will just show it as a standard message. 

### Disconnect
When a user disconnects, this user gets removed from usernames array. This triggers the online user event which will then show the current online users and the user that just went online will be no longer visible. 


## Checklist

### Must have
- [x] Chat function
- [x] See a definition
- [x] See if guess is correct
- [x] Get new definition

### Should have
- [x] See when someone's online
- [x] See when someone goes offline 
- [x] See who sent message

### Could have
- [ ] Get hint for correct answer
- [ ] Multiple rooms

### Would have
- [ ] Points for correct guesses
- [ ] Message time stamps


## Sources
* [Urban Dictionary API](https://rapidapi.com/community/api/urban-dictionary)
* [Socket.io](http://socket.io)


## License
Usage is provided under the [MIT License](https://github.com/marloestacx/WordGuesser/blob/main/LICENSE). See LICENSE for the full details.

<!-- Add a link to your live demo in Github Pages 🌐-->

<!-- ☝️ replace this description with a description of your own work -->

<!-- replace the code in the /docs folder with your own, so you can showcase your work with GitHub Pages 🌍 -->

<!-- Add a nice poster image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Maybe a table of contents here? 📚 -->

<!-- How about a section that describes how to install this project? 🤓 -->

<!-- ...but how does one use this project? What are its features 🤔 -->

<!-- What external data source is featured in your project and what are its properties 🌠 -->

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->

<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->
