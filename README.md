# NASA_MarsRoverPhotos
## SDJS-01 Interview Excercise

<img src = "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"> <img src = "https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"> <img src = "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"><img src = "https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white"> <img src = "https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"> <img src="https://img.shields.io/badge/Freecodecamp-%23123.svg?&style=for-the-badge&logo=freecodecamp&logoColor=green"> <img src= "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white">

## Requirements
- Node.js v12 or above
- Visit https://api.nasa.gov/ and generate a private API key for personal use

## Instructions
- Clone this repository

- Install all the framework dependencies
```
npm i 
```
- Create and env file and add your personal key like this
```
REACT_APP_NASA_API_KEY = <Your_own_personal_key>
```

- To build the application, so the environmental variables are set, run the command:
```
npm run build
```
:information_source: Every single time the env file is modified this command must be run once again, so the environmental variables are updated.

- Then, you can run the application:
```
npm start
```

React JS will automatically create a local server to deploy the application.

## For CD/CI
If you want to run the application and see it reflected on GitHub pages
Add the secrets to your own repository:
```
REACT_APP_NASA_API_KEY = <Your_own_personal_key>
ACTIONS_DEPLOY_ACCESS_TOKEN = <Your_own_personal_token_generated_by_github>
```
The yaml file is already set to retrieve both secrets for deploying de CD/CI pipeline and the environmental variables.

### You can see the project working in the following link

https://AntonioMM8506.github.io/NASA_MarsRoverPhotos/



