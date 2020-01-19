# learning-javascript
![image](https://raw.githubusercontent.com/fukugit/images/master/leaning-javascript.jpg)
This is just a JavaScript note book that I learn JavaScript with the book.  

## Getting Started
The some example JavaScript code in this project can be ran on local environment.  

### Prerequisites
This project is consists of npm. And it is necessary to install Mocha library to run test js.  
1. `brew install nodebrew`  
2. `npm install --global mocha`  

### Installing
1. `git clone https://github.com/fukugit/learning-javascript.git`  

2. `cd learning-javascript`  

3. `npm install`  

## Consists
This project consists of some JavaScript file that are defined in leaning JavaScript book each section.  
### 8章 関数
[This programs are that I learned in the section.](js/8function.js)  

## Running
### Run test function
This is a way to run each JavaScript files one by one using Mocha.  
1. `mocha test/8function.js`  

If you want to run all of test file, you can run this command instead.  
1. `npm test`  

### Run index.js
This is a way to run root JavaScript file that consists of all of JavaScript file under the js folder.  
1. `node index.js`  

### Open browser
This is a way to open index.html file. The index.file defines the index.js file, so each javascript file result will put into the console of browser.  
1. `npm start`  

## Build
After adding JavaScript file under the js folder and changing index.js file, you can run the below command to build. The built file will be appeared in build folder.  
1. `npm run build`  

## Acknowledgments
Thank you for publishing good book, David Flanagan and Murakami.
