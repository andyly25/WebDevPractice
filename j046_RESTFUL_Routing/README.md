# RESTful Routing:

## Introduction
- define REST and explain WHY it matters
    - a pattern for defining our routes
    - convention with a nice pattern
    - a mapping between HTTP routes and CRUD
        - CREATE, READ, UPDATE, DESTROY
    - This is not built with Bootstrap, we'll use Semantic UI for Blog
    
| Name    | Path           | HTTP verb | Purpose                                              |
|---------|----------------|-----------|------------------------------------------------------|
| Index   | /dogs          | GET       | Display a list of all dog                            |
| New     | /dogs/new      | GET       | Displays form to make a new dog                      |
| Create  | /dogs          | POST      | Add a new dog to the DB                              |
| Show    | /dogs/:id      | GET       | Show info about one dog (Needs id for specific page) |
| Edit    | /dogs/:id/edit | GET       | Show edit form for a dog                             |
| Update  | /dogs/:id      | PUT       | Update particular dog, then redirect                 |
| Destroy | /dogs/:id      | DELETE    | Delete particular dog, then redirect somehwhere      |

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

## Notes:
- `<input type="text" name="title">` before we used name attribute as this
    - now we do: `<input type="text" name="blog[title]">`
    - Now all of the values from the inputs in the form get added into one object (req.body.blog) 
    - can easily input that data into the DB by passing in req.body.blog to Blog.create()
    - this syntax is specific to body-parser

## Putting the C in CRUD
- add NEW route
- add NEW template
- add CREATE route
- add CREATE template

## SHOWtime
- add SHOW Route
- add SHOW template
- add links to SHOW page
- Style SHOW template

### SHOW notes:
- instead of <%=, if you use <%- it would run as code instead of string
    - Problem, if people used script tags they can do bad things :)
    - solution: we can Express Sanitize to get rid of script tags

## Edit/Update
- Add edit route
- Add Edit Form 
- Add Update Route
- Add Update Form 
- Add Method-Override


