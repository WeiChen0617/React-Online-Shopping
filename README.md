<h1 align="center">React Online shop</h1>

## About App

Source codes are open on Github separately.

Serverless services: https://github.com/WeiChen0617/aws-serverless-online-shop

React application: https://github.com/WeiChen0617/React-Online-Shopping

The website is hosted on AWS Amplify: https://main.d1iityzpl08e1i.amplifyapp.com

This react application was designed for two clients, including a management client and a user client (Management and Work Place on the landing page).

#### Management Client (Management)

This client interacts with AWS DynamoDB via HTTP. Product and voucher management work here. Generally, CRUD actions are supported. However, there are two things needed to be known.

- list should be refreshed after each action in this version.
- every field is required before editing and creating action.

#### User Client (Work Place)

In this client, the product list and voucher list are fetched from services. The cart status was maintained by React Hooks, which means cart data will be lost after you refresh the web page. Here is one thing that is different from the requirements (Task 7: Alert when an invalid voucher is applied). In order to tell the invalidation of a voucher, the "Expiration" field was introduced. On the cart page, an invalid voucher could not be selected.

##### Download and Run

Once this project was downloaded successfully, here are the step to run.

- **npm install** in project terminal to install all the dependencies
- **npm start** to start a server to run the app, then check it via http://localhost:8000

##### React Architecture

Here is some useful info about architecture which is built on Ant Design Pro.

- config.routes: is the setting about page routes
- src: main page resource
  - models: cart model maintained as shared data
  - pages: main page component
  - e2e: route test
  - services:
    - config.ts: server url
    - models.ts: common models shared between server and app side
    - productService.ts: product apis request
    - voucherService.ts: voucher apis request

#### Summary

Due to the limited time, the product prototype is temporarily completed, but there is still much space that needs to be optimized.
