# Blockquote

Blockquote is a blog post webpage where users can post their articles based on what kind of random quotes will be generated by API. 

API: https://pprathameshmore.github.io/QuoteGarden/

## Installation instructions

## Wire-frame

![wordie-wireframe](./images/login.jpg)
![wordie-wireframe](./images/home.jpg)
![wordie-wireframe](./images/posts.jpg)

## ERD

![wordie-wireframe](./images/erd.jpg)

## Restful Routing Chart
| VERB | URL pattern | Action \(CRUD\) | Description |
| :--- | :--- | :--- | :--- |
| GET | /dinosaurs | Index \(Read\) | lists all dinosaurs |
| GET | /dinosaurs/new | New \(Read\) | shows a form to make a new dinosaur |
| POST | /dinosaurs | Create \(Create\) | creates an dinosaur with the POST payload\(form\) data |
| GET | /dinosaurs/:id | Show \(Read\) | list information about a specific dinosaur \(i.e. /dinosaurs/1\) |
| GET | /dinosaurs/edit/:id | Edit \(Read\) | shows a form for editting a specific dinosaurs \(i.e. /dinosaurs/edit/1\) |
| PUT | /dinosaurs/:id | Update \(Update\) | updates the data for a specific dinosaur \(i.e. /dinosaurs/1\) |
| DELETE | /dinosaurs/:id | Destroy \(Delete\) | deletes the dinosaur with the specified id \(i.e. /dinosaurs/1\) |


## MVP Goals

- As a user, I want to be able to login
- As a user, I want to be able to sign up to the Blockquoto
- As a user, I want to be able log out
- As a user, I want to be able to create a new post
- As a user, I want to be able see all posts
- AS a user, I want to be able to navigate through webpages

## Stretch Goals

- As a user, I want to be able to see comments
- As a user, I want to be able to make comments

## Tech Stacks
- HTML
- CSS
- JS
- Node.js
- Express.js
- VSCode
_ 
