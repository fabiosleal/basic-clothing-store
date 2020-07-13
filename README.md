# Basic Clothing Store

This was coded for a learning purpose.

- HTML, CSS, Sass
- Javasript
- React
  - Class Component (stateful)
  - Functional Component (stateless)
  - React Router
- Google Firebase
  - auth
  - firestore
- Environment Viriables

## Environment Variables

Environment variables that control the operation of the app are defined in the .env (.env.development.local) file in the application root. These variables and their usage are shown in the following table. It's important to keep in mind that when these settings in the .env file are changed npm run build must be run before they will take effect.

Environment variables maintained in the .env file are made available to the application code via process.env.<variable-name>. For example, the homepage for the meteorite landings data is accessed in the code by referencing process.env.REACT_APP_VALIABLE_NAME.

Remember that even though this keeps secure tokens like client id's and secrets out of application code it does not make them secure.

| Environment Variable                          | Description         | Example Setting                           |
| :-------------------------------------------- | :------------------ | :---------------------------------------- |
| REACT_APP_GOOGLE_FIREBASE_APIKEY              | Api key             | kAdkaJdashuNJJNAshbdaksanldkKNAJsnbahbs   |
| REACT_APP_GOOGLE_FIREBASE_APP_ID              | App Id              | 8:762198463253:web:98236gh621037p63t923jh |
| REACT_APP_GOOGLE_FIREBASE_MESSAGING_SENDER_ID | Messaging Sender Id | 76127381754367                            |
| REACT_APP_GOOGLE_FIREBASE_MEASUREMENT_ID      | Measurement Id      | G-JHSADHSAGJHC                            |

---

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
