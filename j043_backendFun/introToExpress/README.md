# Intro to Express

- What is a framework? how is it different from a library?
    - library is code that someone else wrote that we can include in our app.
        - collection of functionality that you can call
    - framework is pretty much similar to library, but how they are used is different
        - control flow already in framework, but some predefined whitespots for you to fill in with your code.
    - Main difference is inversion of control
        - when you call a library you are in control, framework where it calls you
            - Hollywood Principle: Don't call Us, We'll call You (first time heard this XD)

- What is Express?
    - a webdevelopment framework, most widely used node framework and a lot of tutorials
    - on website says: Fast, unopinionated, minimalist web framework for Node.js
- Why are we using Express?
    - Express is a very lightweight framework
        - context: heavyweight is where a lot of things filled in for you and you only get very small portions to fill in for yourself
        - you have a lot more freedom and know what you want.
    - has a vast community that uses it

# First Express App!
- Review an existing app
- review HTTP resonse/request lifecycle
- create our own simple Express app!

# More Routing!
- show the `*` route matcher
- write routes containing the route parameters
- discuss route order
- note reddit does not do an app.get for each subreddit, they use patterns through route parameters

# Rendering HTML and Templates
- Use res.render() to render HTML (from EJS file)
- Explain what EJS is
- Pass variables to EJS templates

# EJS Control Flow
- Examples of control flow in EJS templates
- if statements in an EJS file
- write some loops
- NOTE: two types of tags mostly used in EJS
    - <%= %> : Whatever is inside will be rendered/evaluated to the page so if 5+5 inside, it will render 10
    - <%  %> : Mainly used for logic and we don't want it rendered

#Styles and Partials
- Show how to properly include public assets
- properly configure app to use EJS
- use partials to dry up the code
- in app.js you can use `app.use(express.static("SomeFolder"))` to load your css
- `app.set("view engine", "ejs")` if you want express to assume all views are ejs

## NPM init and Package.json
- use the `--save` flag to install packages
- Explain what the package.json file does
    - this file holds various metdata relevant to the project. 
    - gives info to npm that allow to identify project and project's dependencies.
    - contain other metdata like project description, version, licences, etc...
- use `npm init` to create a new package.json

## NOTES:
- Anytime you make changes to routes, you need to restart server to see the changes
- order of routes *matter*