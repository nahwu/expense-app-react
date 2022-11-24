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
1. Added in Dockerfile for this application
1. Added TLS support


## 4. Development Roadmap
1. **Feature:** Mobile friendly view for existing expenses (ready-made table is not suitable for mobile)
1. **Feature:** Add support for view Transaction API
    1. Search on item description + time period
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

### X1. To run React application for development
    npm start

### X2. Build, push, export Docker image
- Build Docker image

        docker build -t nahwu2/react-expense-app:0.1 .

- Upload Docker image to Docker Registry

        docker push nahwu2/react-expense-app:0.1

- Export Docker image as a file. Normally used when there is no Internet at the deployment location. If on Windows, use this command with Git Bash.

        docker save nahwu2/react-expense-app:0.1 | gzip > exported_react_expense_app_0_1.tar.gz


### X3. Convert React class components to functional components
https://www.digitalocean.com/community/tutorials/five-ways-to-convert-react-class-components-to-functional-components-with-react-hooks


### X4. To remove TLS support from React Web Server
Open nginx.conf and change from

    listen 8081 ssl;
    server_name  nahwu.synology.me;
	ssl_certificate /mycert/bundle.pem;
	ssl_certificate_key /mycert/privkey.pem;

to 

    listen 8081 ssl;
    server_name  nahwu.synology.me;


### X5. To remove TLS support from calling backend server
Open src/App.js and change from

    const backendServerPath = "https://nahwu.synology.me:8080";

to

    const backendServerPath = "http://nahwu.synology.me:8080";



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
