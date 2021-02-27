# Youtube Video Player + Search App | Hooks Refactor

_(note: This project is a refactor from a previous iteration of the same web widget. View the original version, built using class-based components + lifecycle methods <a href="https://github.com/tytysam/simple-youtube-clone/">here</a>)_

Simple React-based app that takes user input in a search field and returns multiple videos from Youtube based on the search terms. User can play video in video component, or can select a different video from the search results to the right of the video player. This app utilizes the public Youtube Data API to display search results.

I built this simple app in order to practice my understanding of the following topics:

- Refactoring a previous build from class-based components (and accompanying state + lifecycle methods) to a functional-component-based application

- Refactoring from state to useState
- Refactoring from lifecycle methods to ~useEffect
- Building custom hooks
- Extracting video fetching logic to a custom hook

Additionally, in building the original core of the app, I was focused on:

- Crafting controlled forms
- Accessing and utilizing Google's Youtube Data API
- Leveraging state and lifecycle methods SANS hooks
- Dynamic rendering based on state
- Making calls with Axios
- Styling content using Semantic-UI

See the live app <a href="https://tcs-simple-youtube-clone-hooks.netlify.app/" target="_blank" >here</a>.
