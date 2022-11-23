## 1. Introduction
This repository is meant for a Frontend web application for an expense tracker application.

**Link for backend application:** https://github.com/nahwu/expense-app-backend


## 2. Purpose
While there are many expense trackers out there. The good ones are mostly behind a paywall. 

There is also the 
**Knowledge** of your own expenses is very crucial to our personal financial health for both the present and the future.

It only takes 20 average medium-sized spending (e.g. $50) within a month to reach 4 figure expense (>= $1000) for the month.
It's not uncommon to know someone who spends beyond their means, especially when one suddenly have more income than before. 

The goal is to begin with expense awareness and then expand to expense budgeting >> saving & networth projection >> retirement planning


## 3. Supported features
1. Transactions data
    1. Date, item description, expense category, payer, receiver, expense/income, amount
1. **Feature:** View existing transactions
    1. View most recent transactions
1. **Feature:** Create transactions
1. **Feature:** Delete transactions
1. Demo functionality for
    1. Adding expense
    1. Viewing expense
        1. Sorting expenses


## 4. Development Roadmap
1. **Feature:** Mobile friendly view for existing expenses (ready-made table is not suitable for mobile)
1. **Feature:** Add support for view Transaction API
    1. Search for transactions
    1. Add in pagination (page + page size) for results
1. **Feature:** Add support for edit Transaction API
1. **Feature:** Add support for aggregation Transaction API (for descriptive analytics e.g. charts)
    1. View current month expenses (by category)
    1. View current month expenses VS budgeted
    1. View current month savings
1. **Feature:** Add support for monthly recurring expense
1. **Feature:** Add support for list, create, edit, delete Expense Category API
1. **Feature:** Add support for income
1. **Feature:** Add support for list, create, edit, delete Expense Payer API
1. **Feature:** Add support for list, create, edit, delete Expense Receiver API
1. **Feature:** Allow data import from CSV file
    1. Flexible field-name remapping for data import/export
1. **Feature:** Allow data export to CSV fil
1. **Feature:** Investment tracking
1. **Feature:** Account login
1. **Feature:** Account creation
1. **Feature:** Multi accounts visibility for family sharing
1. **Feature:** Upload and attach image to expense


# X. OPTIONAL - Developers only

### X1. To run React application
```sh
npm start
```

### X2. Build, push, export Docker image
- Build Docker image

        docker build -t nahwu2/react-expense-app:0.1 .

- Upload Docker image to Docker Registry

        docker push nahwu2/react-expense-app:0.1

- Export Docker image as a file. Normally used when there is no Internet at the deployment location. If on Windows, use this command with Git Bash.

        docker save nahwu2/react-expense-app:0.1 | gzip > exported_react_expense_app_0_1.tar.gz


### X3. Convert React class components to functional components
https://www.digitalocean.com/community/tutorials/five-ways-to-convert-react-class-components-to-functional-components-with-react-hooks


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
