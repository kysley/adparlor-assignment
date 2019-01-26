<div align="center">

  ### Adparlor Front-End Engineering Assignment

</div>

This repo contains the code for Adparlor's FEE Assignment

I was going to host this on [Netlify](https://www.netlify.com) BUT [ky](https://github.com/sindresorhus/ky) doesn't support node 8.15 that Netlify runs :cry:

`ky@0.7.0: The engine "node" is incompatible with this module. Expected version ">=10".`

## Docs
- [Info](#Info)
- [Codebase](#codebase)
  - [Technologies](#technologies)
  - [Folder Structure](#folder-structure)
  - [Code Style](#code-style)
- [First time setup](#first-time-setup)
- [Running the app locally](#running-the-app-locally)

## Info
This specific branch was made using [Mobx-State-Tree](https://github.com/mobxjs/mobx-state-tree) for managing app state. 

Other state managment implementations are branched.. Including:
- [Redux & Sagas](https://github.com/kysley/adparlor-assignment/tree/redux-impl)
- [Vanilla State](https://github.com/kysley/adparlor-assignment/tree/vanilla-impl)
- [React Hooks](https://github.com/kysley/adparlor-assignment/tree/hooks-impl)

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
- **mobx-state-tree**: State Managment


#### Folder Structure
```
adparlor-assignment/
├── assets        # Static assets 
├── components    # Reusable Components
├── pages         # A View (/[something]) built from components 
├── stores        # MST Stories+Models
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
