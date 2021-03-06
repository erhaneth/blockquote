<div align="center">
 <h1>Blockquote</h1>
</div>

Blockquote is a blog compose webpage where users can compose their articles based on what kind of random quotes will be generated by API. When users decide to write an article, they will be inspired by random quotes that will be provided once they create new articles. User articles will be secured with encryption technology and would not get any threat by any malicious third-parties.

Application Link:
<p><a href="https://block-quote.herokuapp.com/">Blockquote</a></p>

API:<p><a href="https://api.quotable.io/random?maxLength=50#">Quotable</a></p>

<details>
<summary>Wireframes</summary>

![blockquote](./images/login.jpg)
![blockquote](./images/home.jpg)
![blockquote](./images/posts.jpg)
</details>
<details>

<summary>ERD</summary>

![blockquote](./images/erd.jpg)

</details>

## _Restful Routing Chart_

| VERB | URL pattern | Action \(CRUD\) | Description |
| :--- | :--- | :--- | :--- |
| GET | /compose | Index \(Read\) | lists all posts |
| GET | /compose | New \(Read\) | shows a form to make a new compose |
| POST| /compose | Create \(Create\) | creates an compose with the payload\(form\) data |
| GET | /compose/:id | Show \(Read\) | list information about a specific compose |
| GET | /compose/edit/:id | Edit \(Read\) | shows a form for editing a specific compose |
| PUT | /compose/:id | Update \(Update\) | updates the data for a specific compose \(i.e. /compose/1\) |
| PUT | /compose/:composeId/comments/:commentId | Update \(Update\) | updates the data for a specific comment \(i.e. /compose/1/comments/2\) |
| DELETE | /compose/:id | Destroy \(Delete\) | deletes the compose with the specified id \(i.e. /compose/1\) |
| DELETE | /compose/:composeId/comments/:commentId | Destroy \(Delete\) | deletes the comment with the specified id \(i.e. /compose/1/comments/2\) |

## _MVP Goals_

- As a user, I want to be able to log in to the Blockquote
- As a user, I want to be able to sign up to the Blockquote
- As a user, I want to be able log out from the app
- As a user, I want to be able to create a new compose in the posts page
- As a user, I want to be able see all posts in the homepage
- As a user, I want to be able to navigate through webpages
- As a user, I want to be able to edit and delete the compose
- As a user, I want to be able to see comments
- As a user, I want to be able to make comments

## _Stretch Goals_

- As a user, I want to be able to edit and delete comments


<b/>

## _Technologies Used_

![HTML5](https://img.shields.io/badge/-HTML5-333?style=flat&logo=html5)
![CSS3](https://img.shields.io/badge/-CSS-333?style=flat&logo=css3)
![JavaScript](https://img.shields.io/badge/-JavaScript-333?style=flat&logo=javascript)
![Express](https://img.shields.io/badge/-Express-333?style=flat&logo=express)
![Node.js](https://img.shields.io/badge/-Node.js-333?style=flat&logo=node.js)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)


## _Installation Instructions_

If you like to install this app, follow these instructions:
- Fork-Clone Blockquote repository
- Install all necessary dependencies
- Create env file to store randomized ENCRYPTION_KEY
- Nodemon to run the application
- This application using Quotable API and does not need an API key

