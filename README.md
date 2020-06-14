# Basic Clothing Store

This was coded for a learning purpose.

## Environment Variables

Environment variables that control the operation of the app are defined in the .env (.env.development.local) file in the application root. These variables and their usage are shown in the following table. It's important to keep in mind that when these settings in the .env file are changed npm run build must be run before they will take effect.

Environment variables maintained in the .env file are made available to the application code via process.env.<variable-name>. For example, the homepage for the meteorite landings data is accessed in the code by referencing process.env.REACT_APP_VALIABLE_NAME.

Remember that even though this keeps secure tokens like client id's and secrets out of application code it does not make them secure.

Environment Variable	Description	Example Setting

| Environment Variable | Description | Example Setting |
|:---------------------|:------------|:----------------|
REACT_APP_GOOGLE_FIREBASE_APIKEY | Api key | kAdkaJdashuNJJNAshbdaksanldkKNAJsnbahbs
REACT_APP_GOOGLE_FIREBASE_APP_ID | App Id | 8:762198463253:web:98236gh621037p63t923jh
REACT_APP_GOOGLE_FIREBASE_MESSAGING_SENDER_ID | Messaging Sender Id | 76127381754367
REACT_APP_GOOGLE_FIREBASE_MEASUREMENT_ID | Measurement Id | G-JHSADHSAGJHC

----

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
