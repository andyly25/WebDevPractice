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