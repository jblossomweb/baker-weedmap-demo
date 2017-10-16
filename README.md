This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Notes
- configs have been ejected (`npm run eject`) from CRA in order to customize Webpack.
- a 2nd linter was added (next time I will just RTFM) to conform to AirBNB.
- a 3rd linter was added to lint css styles (there may be a better way here too)
- [Storybook](https://storybook.js.org/) was added because it's cool.

 See additional scripts below, or look at `package.json` to see what commands are run.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run lint`

Runs a 2nd js linter manually to catch AirBNB rules.

### `npm run lintfix`

Runs a 2nd linter manually to catch AirBNB rules, with the autofix flag: `--fix` (be careful with this)

### `npm run stylelint`

Runs a 3rd linter manually to catch any bad css.

### `npm run storybook`

Runs Storybook locally on port 9009 for SDD<br>
Open [http://localhost:9009](http://localhost:9009) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any errors in the console.

### `npm run build-storybook`

Builds a static Storybook for production.<br>
From here, you could host it anywhere, like an S3 bucket, to share with Product Owners, Designers, etc.
