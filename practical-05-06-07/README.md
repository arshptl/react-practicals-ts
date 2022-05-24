# Practical 07
******User list app - Functional specifications******

- Initiated the project using Create-React-App
- Used practical-05's template/UI
- Added dynamic data instead of static data
	- Apis
		- [https://reqres.in/api/users?page=1](https://reqres.in/api/users?page=1)
		- [https://reqres.in/api/users?page=2](https://reqres.in/api/users?page=2)
-    Optimized code
-   Added environments in the code
-   Generated staging and production build

### Env setup
- .env
	- REACT_APP_DOC_TITLE = "Optimizing Practical-07"
- .env.development
	- REACT_APP_API_ENDPOINT_FIRST = "https://reqres.in/api/users?page=1"
REACT_APP_API_ENDPOINT_SECOND = "https://reqres.in/api/users?page=2"
- .env.production
	- REACT_APP_API_ENDPOINT_FIRST = "https://reqres.in/api/users?page=1"
REACT_APP_API_ENDPOINT_SECOND = "https://reqres.in/api/users?page=2"
- .env.staging
	- REACT_APP_CUSTOM_NODE_ENV = "staging"
REACT_APP_API_ENDPOINT_FIRST = "https://reqres.in/api/users?page=1"
REACT_APP_API_ENDPOINT_SECOND = "https://reqres.in/api/users?page=2"

### Preview:
![Preview of output](https://user-images.githubusercontent.com/96298315/157815266-7bcb7dce-feeb-47b2-a313-99f6eed3156c.png)

## Library used
- [styled-components](https://www.npmjs.com/package/styled-components) for styling
- [react-icons](https://www.npmjs.com/package/react-icons) for icons
- [react-lazyload](https://www.npmjs.com/package/react-lazyload) for loading images
- [env-cmd](https://www.npmjs.com/package/env-cmd) for executing commands using an environment from an env file

## How to Run this project

### Step 1:  `Clone this project`

### Step 2:  `npm install`

To install all the dependences.

### Step 3: `npm start`
To start this project

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

> This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
