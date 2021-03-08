# ACCENTURE Technical Assessment

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

I have implemented the assignment based on the given requirement with best practices by following code modularity and abstraction principle in mind. I was aware of the given timeline to finish the coding assessment in 7 days but based on my time availability, I only have given two days.

Caching Algo fulfils the requirement of pre-fetch the data for the next eight pages. I have written the code as configurable to adjust the number of cache pages in the config and the total number of records per page. Application UI is dived into smaller reusable components to reduce UI level complexity; I believe that there is some space for improvement.

Redux store code is divided into separate directories based on the purpose and covered with unit test cases. I have configured the redux tool to give you a better understanding of the state. There is some room for improvement and refactoring, but I haven't implemented detailed normalization and other store management best practices because of time availability.

:bulb: While configuring the API, I feel the CORS a bit challenging , kindly add below scripts to the assessment.

:bulb: Please let me know once the review is completed so that I can remove the code from GIT

## Time taken :watch:

Initial two days, I had trouble setting API calls on my office laptop, mainly due to browser CORS and company laptop restriction :worried:. It would be nice to share the CORS fix as part of the assessment instruction.

Although it was challenging to take time out of your normal weekend activities, I worked on the implementation part on my weekends. I did some refactoring and added the redux store tests on Monday morning; the rest of the day was pretty busy with my office work, and from evening the provided API is not responding and throwing error pay GET request
Based on the occupancy, I haven't much time to add more test coverage to my code except the redux part, and also, I had plans to add cypress test's of the UI part, but due to the time constraint and optional requirement, I have parked it.

### TODOs

- [ ] Typescript implementation
- [ ] Add Cypress tests(UI)
- [ ] Code Deployment CI/CD

## Available Scripts

Due to the proxy restriction, I have disabled the CORS on the browser-end; please use the below script and open the application inside the disabled CORS browser instance

### MAC Users

`open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security`

### Window User

`<Directory>\chrome.exe --args --user-data-dir="/<XDirectory>" --disable-web-security`

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run test:single`

Launches the test runner targeting a particular file.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

hat this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
