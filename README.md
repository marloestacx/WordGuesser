# Word Guesser
View art right from your phone

## Table of contents
* [Concept](https://github.com/marloestacx/pwa-rijksmuseum#concept)
* [Features](https://github.com/marloestacx/pwa-rijksmuseum#features)
* [Installation](https://github.com/marloestacx/pwa-rijksmuseum#installation)
* [Live Demo](https://github.com/marloestacx/pwa-rijksmuseum#live-demo)
* [Activity Diagram](https://github.com/marloestacx/pwa-rijksmuseum#activity-diagram)
* [Client side vs Server side](https://github.com/marloestacx/pwa-rijksmuseum#client-side-vs-server-side)
* [Critical Rendering Path](https://github.com/marloestacx/pwa-rijksmuseum#critical-rendering-path)
* [Checklist](https://github.com/marloestacx/pwa-rijksmuseum#checklist)
* [Sources](https://github.com/marloestacx/pwa-rijksmuseum#sources)
* [License](https://github.com/marloestacx/pwa-rijksmuseum#license)

## Concept
The concept is an online woord guesser game. You see a definition on the screen and have the guess the word by typing in the chat. 

![IMG_3536](https://user-images.githubusercontent.com/24413936/167620531-f1f166e1-d407-4250-8f23-b47b71b857bb.jpg)


## Features
In the game you can guess the word by reading the defintion. You can see who's online and chat with eachother while you try to guess the correct word.

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

## API
For this project I use the [Urban Dictionary API](https://rapidapi.com/community/api/urban-dictionary). This API stores all definitions which are hosted on the Urban Dictionary website.

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


## Checklist
### Must have
- [x] Chat function
- [x] See a definition
- [x] See if guess is correct
- [x] Get new definition

### Should have
- [x] See when someone's online
- [x] See when someone goes offline 

### Could have
- [ ] Get hint for correct answer

### Would have
- [ ] Points for correct guesses


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
