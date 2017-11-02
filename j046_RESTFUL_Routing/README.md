# RESTful Routing:

## Introduction
- define REST and explain WHY it matters
    - a pattern for defining our routes
    - convention with a nice pattern
    - a mapping between HTTP routes and CRUD
        - CREATE, READ, UPDATE, DESTROY
    - This is not built with Bootstrap, we'll use Semantic UI for Blog
- List all 7 RESTful routes
    - INDEX:    /dogs           GET     Display a list of all dog
    - NEW:      /dogs/new       GET     Displays form to make a new dog
    - CREATE:   /dogs           POST    Add new dog to DB 
    - SHOW:     /dogs/:id       GET     Shows info about one dog (needs id for specific)
    - EDIT:     /dogs/:id/edit  GET     Show edit form for one dog
    - UPDATE:   /dogs/:id       PUT     Update particular dog, then redirect
    - DESTROY:  /dogs/:id       DELETE  Delete a particular dog, then redirect somewhere
- Show example of RESTful routing in practice

## Blog Index
- Setup the Blog App
- Create the Blog model
- Add INDEX route and template
- Add Simple Nav Bar

## Basic Layout
- add header and footer partials
- include semantic UI
    - going here to grab CDN: [Semantic UI CDN](https://cdnjs.com/libraries/semantic-ui)
        - comapred to Bootstrap, you can just take a small chunk to use
        - for us we use the semantic.min.css
    - We'll make a menu similar from this [link](https://semantic-ui.com/collections/menu.html)
    - and Icon from [here](https://semantic-ui.com/elements/icon.html)
        - add icon using '<i class="code icon"></i>'
- add simple nav