This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# Running the Application

## Deveoplment mode
```yarn start```
Runs the app in development mode.
Open http://localhost:3000 to view it in the browser.

The page will automatically reload if you make changes to the code.
You will see the build errors and lint warnings in the console.

## Testing
```yarn test```
Runs the test watcher in an interactive mode.
By default, runs tests related to files changed since the last commit.

## Building and deploying
```yarn build```
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
By default, it also includes a service worker so that your app loads from local cache on future visits.

Then run
```
git commit -m "Your commit message"
git push heroku master
heroku open
```
