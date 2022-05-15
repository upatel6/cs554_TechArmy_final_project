# Cryptic Ventures

[Cryptic Ventures](https://crypticventures.herokuapp.com/) is a cryptocurrency tracking tool that allows authenticated users to track cryptocurrency, monitor changes and trends, and get the latest cryptocurrency news relevant to coins of interest on the market.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Technology](#technology)
3. [Installation](#installation)
4. [Features](#features)
5. [Author](#author)

## Getting Started

Initial conditions to get the most out of the code provided.

- Package Manager - [NPM](https://nodejs.org/en/)
- Code Editor - [VS Code](https://code.visualstudio.com/)
- Operating System - MAC OS, Windows or any Linux Distro
- Modern Browser - [Google Chrome](https://www.google.com/chrome/) or [Firefox](https://www.mozilla.org/en-US/firefox/new/)

## Technology

### Course Technology

**_React_**: React will help in the front-end part by providing many libraries for user interface and components. It will be helpful in a way for creating reusable UI components that will be included in our pages <br>

**_Redux_**: Redux is mainly used for state management.This means it will help in data communication facilitation across different components. We will use redux for making our application simple to use and easier to maintain <br>

**_Next_**: Next.js will be used for rendering server-side react. It will help us in unifying react and express. This will help us in pre-rendering every page which will result in better performance <br>

**_FirebaseAuthentication_**: Firebase authentication will be used to authorize users for our website. It will include login/signup by email id. Firebase authentication is a framework to build secure authentication systems whilst improving the sign-in experience. We will use Firebase to authenticate users to our application and to allow multi-platform sign in. <br>

### Independent Technology

**_Nivo_**: Charting framework built on D3 used to render charts from server-side. It helps in data visualization and also enables us to bring data to life using HTML, CSS and SVG. We will use nivo for building charts and graphs related to crypto coins <br>

**_HerokuAppDeployment_**: Heroku is a container-based cloud Platform as a Service (PaaS).Developers use Heroku to deploy, manage, and scale modern apps.Heroku platform is elegant, flexible, and easy to use, offering developers the simplest path to getting their apps to market <br>

### Extra Technology

**_MongoDB_**: NoSQL database used to store user, coin and session data <br>

**_Passport_**: Passport is Express-compatible authentication middleware for Node.js <br>

**_FuzzySearch_**:I helps in searching likely relevant to a search argument even when the argument does not exactly correspond to the desired information.<br>


View the [package.json](https://github.com/upatel6/cs554_TechArmy_final_project/blob/main/package.json) to see additional technology used.

## SetUp

- Install

```bash
npm i --save
```

- Run Server 

```bash
npm run server
```

- Run Client 

```bash
npm run dev 
```

- Go to [CoinMarketCap](https://coinmarketcap.com/api/) API main site and register for an API Key
- Go to [CryptoCompare](https://min-api.cryptocompare.com/) API main site and register for an API Key
- Go to [InvestingCryptocurrencyMarkets](https://rapidapi.com/apidojo/api/investing-cryptocurrency-markets) API main site and register for an API Key

## Features

- Firebase Authentication
- Sessions
- Cryptocurrency Market Data
- Cryptocurrency Latest News
- Specific Coin Monitoring
- Dashboard
- Coin Historical Data Visualization
- Fuzzy searching
- Heroku App Deployment

## Author

**Tech Army Members:**
 - **Shweta Mishra 10476307**
 - **Udit Patel 20006998**
 - **Shefalee Shet 10475272**
 - **Bhargav Baleja 10469548**
