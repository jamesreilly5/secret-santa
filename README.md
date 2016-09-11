# Secret Santinator
A React App that pairs Secret Santa participants together

![Alt text](/screenshot.jpg?raw=true "Secret Santa")

### Dependencies
* Node/npm
* Gulp

### Development
**Running the app**

- Run `npm install`
- Run `NODE_ENV=development gulp`
- Go to `localhost:8889` to display the app

Alternatively you can open the index.html file in the dist directory

**Run tests in browser**

Go to `localhost:8889/testrunner.html` to see your tests

**Minify the code, ready for production**

Run `NODE_ENV=production gulp deploy`

### Challenge
* Develop a web UI that loads the contents of users.json and renders a list of random assignments for [Secret Santa](http://en.wikipedia.org/wiki/Secret_Santa)
* Extra interactivity/styling will be considered a bonus.
* Use the included index.html and user.json to begin with but do not modify the structure of the users.json. You are free to modify index.html as you wish.

## Guidelines
* Use whichever libraries you prefer, or deem suitable for coding/styling purposes. Using libraries linked from public CDNs is preferable (e.g. [cdnjs.com](https://cdnjs.com/)).
* The solution will be expected to work via one of the following protocols: http, https.
* Gilt supports all major browsers from IE9 and up. If you have the time to also support these this is a bonus. Please specify which browsers you have aimed to support with your solution.
