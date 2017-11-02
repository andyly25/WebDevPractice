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
