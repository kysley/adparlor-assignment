<div align="center">

  ### Adparlor Front-End Engineering Assignment

</div>

This repo contains the code for Adparlor's FEE Assignment

## Docs
- [Info](#Info)
- [Codebase](#codebase)
  - [Technologies](#technologies)
  - [Folder Structure](#folder-structure)
  - [Code Style](#code-style)
- [First time setup](#first-time-setup)
- [Running the app locally](#running-the-app-locally)

## Info
This specific branch was made using *nothing aside from react interals* for managing app state. :flushed:

But this is better... We used [Hooks!](https://reactjs.org/docs/hooks-intro.html) :chains: using react@16.8.0-alpha.1

Other state managment implementations are branched.. Including:
- [Mobx-State-Tree](https://github.com/kysley/adparlor-assignment/tree/master)
- [Redux & Sagas](https://github.com/kysley/adparlor-assignment/tree/redux-impl)
- [Vanilla State](https://github.com/kysley/adparlor-assignment/tree/vanilla-impl)

Note that all 'active' states, seen on _Blueprint_ and _Library_ text are hard coded using a `fakeActive` prop- as [React-Router](https://github.com/ReactTraining/react-router) @ 4.3.x `NavLink` component is bugged.
It *should* be fixed when 4.4.x drops... but I'm not confident :unamused:

:warning: You may see some linting errors here and there if you have eslint configured on your favourite text editor.. Let me explain why I don't disable these (or fix them)
- `no-confusing-arrow`: This works as a nice reminder to me as what is going on when composing styles using emotion.
- `prefer-default-export`: I always make sure there is a default export, but on the file that it's present on I added my reasoning in the top comment.

If you want to look at a more advanced/fleshed out rendition of creating a design library feel free to take a look at my work over at [Scribe (styled directory)](https://github.com/withscribe/scribe/tree/next/src/styled)
- `/system/` Contains awesome reusable primivites for the entire app
- [The rest of the App](https://github.com/withscribe/scribe) is what myself & my amazing team created to rank as a finalist in our Capstone Competition. You should definitely check it out :wink:

## Codebase

#### Technologies

List of other tech that is used
- **ky**: Super small fetch wrapper
- **React**: Frontend
- **emotionJS**: CSS-in-JS
- **react!**: State Managment


#### Folder Structure
```
adparlor-assignment/
├── assets        # Static assets
├── components    # Reusable Components
├── pages         # A View (/[something]) built from components
├── styled        # CSS-in-JS (emotion) files
└──────────────────────────────────────────────────────
```

#### First Time Setup
1. Clone/download the project to your pc
2. run `yarn` to download all necessary packages
3. you should be good to continue to [Running the App locally](#running-the-app-locally)

#### Running the App locally
_Development_
1. `yarn start` after you completed [First Time Setup](#first-time-setup)

_Production_
1. `yarn build` after you completed [First Time Setup](#first-time-setup).

There isn't really a reason to build for production unless you wanna gawk at the awesome bundle size :tada:
