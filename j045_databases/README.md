# Databases

## Intro to Databases
- What is a database?
    - Collection of info/data
    - has an interface (write code to interact with it)
- SQL(relational) vs NoSQL(non-relational)
    - Below is an example of a relational database:
    - out of laziness I'm using http://www.tablesgenerator.com/markdown_tables to generate tables
    - Everything is tabular so you have to define a table beforehand and not very flexible
        - adding new columns and etc
    - non- relational you don't have to define patterns ahead of time
- Users Table:

| id | name | age |   city   |
|----|------|-----|:--------:|
| 1  | tim  | 57  | NYC      |
| 2  | era  | 24  | Boulder  |
| 3  | sue  | 40  | Missoula |

- Comments

| id | text                      |
|----|---------------------------|
| 1  | "LOL"                     |
| 2  | "Apple pies"              |
| 3  | "study bleh"              |
| 4  | "UC systems is corrupted" |

- To have a user associated with comments, we need to make a join table

| userId | commentId |
|--------|-----------|
| 1      | 3         |
| 2      | 2         |
| 2      | 4         |
| 4      | 1         |
- example of a non-relational db: This is in BSON
    - MongoDB representing their JSON in this binary encoded format

```bson
{
    name: "Ira",
    age: 24,
    city: Missoula,
    comments: [
        {text: "Apple pies"},
        {text: "UC systems is corrupted"}
    ],
    favColor: blurple
}
```

## Intro to MongoDB
- it is a noSQL non relational db
- One of most popular with Node and Express
- MEAN stack stands for: Mongo - Express - Angular - Node

## Installing MongoDB
![install MongoDB link](https://treehouse.github.io/installation-guides/mac/mongo-mac.html)

## Mongo Commands
- mongod    : I assume starts the server to run mongo
- mongo     : starts the mongo terminal 
- help      : help on what commands are available
- show dbs  : show all dbs available
    - if we do `show collections` after creating our dog insert we can view the dogs
- use       : uses a db and if not there creates one and use it
    - example: `use demo` 
    - this will switch you to the demo db or create one
- insert    : adds a new entry
    - example: `db.dogs.insert({name:"Rusty", breed:"Mutt"})` 
    - inside demo, we created a collection called dogs and will add a new dog element(s)
- find      : find an entry
    - if we do `db.dogs.find()` without passing in args, it will return all in that collection
    - `db.dogs.find({breed:"Mutt"})` will show all dogs that are Mutt
- update    : update a current entry
    - `db.dogs.update({name:"Rusty"}, {$set:{name: "Tater", isCute: true}})`
    - This updated the name and added in a new key value pair
- remove    : delete an element
    - `db.dogs.remove({breed: "poodle"})`
    - will remove all poodles

## CRUD
- Create
- Read
- Update
- Destroy 