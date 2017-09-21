# Intro to NPM

- Define and explain why NPM is awesome
    - A JS package manager where you have access to over 200k packages
    - really simple to install packages
- Packages we'll be using
    - Express, Mongoose, Morgan, EJS, body parser, cookie parser, passport ...

## Installing and using packages

- Use 'npm install' to install a package
- use 'require()' to include a package

### Installation fun
- following tutorial he says to just do npm install cat-me, but I then run into a problem
    - warning of enoent no such file
    - so to solve this recommend: **npm init** 
        - and keep pressing Enter until complete
    - this will create a *package.json* for you
    - new problem is he had a node_modules folder and I don't
        - do **npm install cat-me --save** and it will add a node_module folder
            - new problem! if already installed couple of modules, you'll see a whole bunch inside
            - this is some new update since npm 3 which installs dependencies flattened
