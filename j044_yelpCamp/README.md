#YelpCamp
- Create a Landing Page
- Add campground page that lists all campgrounds
    
- Each Campground has:
    - Name
    - Image
    - e.g.: `[{name:"Salmon Creek, image: "http://www.image.com}]`

## Layout and Basic Styling
- Create our header and footer partials
- add in bootstrap

## Creating New Campgrounds
- Setup new campground POST route
- add in body-parser
- setup route to show form
- add basic unstyled form 

## Style the campgrounds page
- add better header/title
- make campgrounds display in a grid

## Style the Navbar and Form
- Add a navbar to all templates
- style the new campground form

## Add mongoose
- install and configure Mongoose
- setup campground model
- use campground model inside of our routes

## Show page
- review the RESTFUL routes we've seen so far
- Add description to our campground model
- show db.collection.drop() - this is to get rid of everything our db stored
- Add a show route/template

### RESTFUL Routes
- INDEX:    /dogs       GET     Display a list of all dog
- NEW:      /dogs/new   GET     Displays form to make a new dog
- CREATE:   /dogs       POST    Add new dog to DB 
- SHOW:     /dogs/:id   GET     Shows info about one dog (needs id for specific)
