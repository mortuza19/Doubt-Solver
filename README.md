
# DoubtSolver

This project is a small application of community forum. The application is created using Angular version 8, along with Angular Material & CSS3.

The project mainly focuses on the UI part. all the data generated are from the given JSON file with the assignment.

## Hosted URL

https://mortuza19.github.io/Doubt-Solver

username - Sharanya
password - pwd123

## Git branch

The code is in "master" branch.

## Application Description

The application mainly consist of 4 main features.
1. Sign In & Sign up page.
2. Home page or Topic list page.
3. Add new Question popup.
4. Question detail page.

    ## Sign In & Sign up page

    When user will open up the application, he/she will be navigated to the sign in page. Now use any of the existing user ID from the users.json file & use default password 'pwd123'. If we want to create a new user, needs to slide into the sign up section. There we can provide email, username & pwd to register & sign in with that account.

    Now as, there is no database or API, the user will not get saved permanently. After sign in, the id & username is being stored in the session storage for further use.

    ## Home page

    Once signed in, user will be navigated to the homepage. Now homepage consist of three main component.
    a. header - the header is a sticky one with logo, logout button & user icon. clicking on logout, will logout the session.
    b. Search bar - below the header, search bar is present. The search bar is an auto complete with all the subject names of the topics. For a single instance only one topic can be searched.
    c. tag section - in the right side vertically all the tags are present as list. The tags are static & dummy tags taken from the picture given with the assignment. The tag section also contains a button "Create new thread". Clicking on the button will open up a dialog box. The dialog box contains Subject input, Content input & category/tag select drop down. Saving the data will add a new topic to the existing topic lists.
    d. Main Section - The main section contains the list of topics. Now if we click on any tag, it will show all the topics of that particular tag. Clicking in "All" tag returns all the topic list.

    ## Question page

    Now clicking on any of the topic subject, user will be navigated to the question page. In that page, the detail of the of the questions are shown. It shows the subject, content, creator details, likeCount, ViewCount. Also it shows the comments & replies. The main operations in the page, that user can do are adding new comments & adding new replies to a particular comment.

    Now as the JSON objects are big for each topic, for time constrain, I am showing the same data for every topic. 
    
    Finally there are lot of scopes for adding more feature to the application but due to time constraint, only main features are added for this assignment.
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
