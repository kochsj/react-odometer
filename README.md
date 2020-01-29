# React Odometer
**Author**: Stephen Koch

## Overview
In this repository, I am exploring the React.js framework [React](https://reactjs.org/) to create front end views and manipulate the DOM. My goal is to get a good understanding of React to be able to build out a Django server/db backend with React frontend.

## Getting Started (running liveserver)

Because we are using React, make sure that you have [node.js](https://nodejs.org/en/download/). You can check if you have node and node package manager (npm):
```
$ node -v
v12.12.0
$ npm -v
6.11.3
```
If you do not, install [here](https://nodejs.org/en/download/).

When you do, you need to have the files locally. Click on the green clone or download button and Download ZIP:

![Click_to_download](media/Click_to_download.png)

In your command line, navigate to this directory:
```
$ cd ~  ##this is your root directory
$ cd Downloads  ##by default: Downloads is a directory inside of your root; and where your file will be downloaded
$ cd react-odometer ##and now you are in this directory
```
You will need to get the node modules locally. Run:
```
$ npm install
```
This will install the dependencies from the package-lock.json. From there you can start the liveserver and checkout the odometer render in your browser.

## Functionality/Architecture
This web app is for demonstration purposes. It is a React web app project called react-odometer.

We are currently able to run a server and, using event handlers/listeners, increment/decrement the odometer on the page.

## Change Log
Tue Jan 28 2020 20:19:39<br>Wired together a react driven site.
