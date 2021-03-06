# MTV MUSIC TRIVIA! 👨‍🎤
a totally rad music trivia game for mobile with an 80s theme!

#### Link to Live Site
https://zanemeroff.github.io/mtv_music_trivia

#### Introduction
This was my fourth (last) project from Mod3 at Turing School of Software and Design. I was given six days to create a unique React app utilizing React Router, React Redux, and the `fetch()` method to `GET` data from an API. I chose to create a mobile friendly music trivia game using the [Open Trivia Database API](https://opentdb.com) to populate the questions. I created a robust testing suite using Jest and Enzyme to unit test all components and user interactions. The app boasts 97% testing coverage across 62 individual tests.

#### Screenshots
![screenshot 1](https://user-images.githubusercontent.com/53405028/75648980-f51f7b00-5c0e-11ea-9c84-0b985f7ad267.png)

#### Directions for Use
- On page load the user will see an intro screen asking for a name and difficulty.
- After selecting `START GAME` the user will see their first of ten question prompts with four possible answers.
- Selecting an answer, then selecting the `SUBMIT ANSWER` button will reveal a confirmation message letting the user know if they were correct or incorrect.
- There is a header at the top of the screen that persists throughout the game displaying the current question, number of right and wrong responses, and the current difficulty.
- At the end of the game the user will see their score given as a percentage as well as cards representing all missed questions with the user's answer and the correct answer.
- There is a `NEW GAME` button on the last screen enabling a user to start a new game.

#### Project Goals and Requirements
- Use the technology you’ve been working with over the course of the module to demonstrate mastery of React, Redux, Router, and Asynchronous JavaScript.
- Work within constraints to deliver a unique product for your audience which helps them in some way. Your project must utilize your assigned API and technology, and must be built for your assigned audience.
- Your applications should have the following core functionality:
- Display the data from the API in a way that applies directly to your audience
- Ability for users to store/manipulate the data displayed in the application, such as favoriting or adding to a list

#### Technologies Used
- ReactJS
- React Router
- Redux
- CSS
- Jest/Enzyme

#### How to run on a local machine with NPM
1. shut down any live servers you currently have running (`control` + `c`)
2. clone down this repo to desired location
3. `cd` into the new repo directory
4. run `npm install`
5. run `npm start`
6. you should now be able to run the app within your browser from the url: `http://localhost:3000`

#### This project was created by:
Zachary Nemeroff https://github.com/ZaneMeroff
