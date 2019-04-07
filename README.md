# Project Title
Life Management

## Description 
This project helps you to manage your life, fully customized, customized categroies, track your tasks,
measure how productive you are, etc.
### Contents

```
Project
│   README.md       --> Contains project description you are reading now.
│   Gruntfile .js   --> Contains Grunt "Tasks Runner"  configurations with some plugins as examples "develop, watch and jshint".
│   package.json    --> Contains all npm packages needed for this project.
|   bower.json      --> Contains all bower packages needed for this project. 
|   
└─── server --> Folder contains all Back-End codes.
│   │   
│   └─── express --> Folder contains "Express" configurations and "routes" files for app APIs.
|        |
|        |_____ configs.js  --> File contains all needed "Express" configurations like its middlewares and so on.
|        |
|        |_____ routes      --> Folder contains all routes for this app APIs.
|           
│       
│   │   
│   └─── models  -->  Folder contains all Mongoose models and its plugins.
│          
│       
│   │   
│   └─── controllers --> Folder contains all modules which handle different APIs.
│          
│       
│   │   
│   └─── utilis   --> General utilis which needed by different app's modules.
│          
│       
│   │   
│   └─── app.js   --> App startup script to set the needed configurations, load Mongoose models, start listening and so on. 
|
│          
│       
│   
└─── client  --> Folder contains all "Front-End" codes. This folder generated automatically using 
    this command: ng new client

    and then modify "angular.json" file to output to "server/public" folder and also adding "bootstrap" to Angular's  styles list.
           
```


### Prerequisites
* Know about JavaScript MEAN stack.
* Have npm & ng CLI installed on your machine.
* Assure you have MongoDB server running on your machine with default settings.

### Building Steps:

* Download project source code.

* Build the needed NPM modules as following
    ```
    npm install
    ```

* Change directory to ```client``` and then run the following command
    ```
    npm install
    ```

* From inside the root directory, you can run this project as following.
    #### Terminal 1:

    ```
    npm run angular
    ```
    This command will build Angular codes and output to 'server/public' folder, and watch for changes and rebuild automatically.


    #### Terminal 2:
    ```
    grunt
    ```
    runs default Grunt tasks for you (running Node.js app, watch for any server changes). 
    
    #### Side note:
    And also there is a separate task can use to lint your JavaScript codes "jshint" as following.
    ```
    grunt jshint
    ```

* From browser just type 
    ```
    http://localhost:8080/
    ```






 