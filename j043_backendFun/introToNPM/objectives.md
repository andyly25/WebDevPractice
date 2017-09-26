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

## TRIVIA on using NPM
- when we install a package we have some options at the end
    - --save-dev : used when you want to download a package for developers
        - e.g. gulp, grunt... this is so when you distribute your code to production, these dependencies will not be available.
    - --save : used when you want to save a package dependency for distribution
        - things like angularjs or any other module that is required at run time by your program
    - use nothing : not recommended
        - install packages but no way the package.json be updated with dependencies
        - no way for others to know what dependencies your module has