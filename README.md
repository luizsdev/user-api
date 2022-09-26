<h1 align="center">USER-API</h1>

## 🎯 ABOUT

**A user api system made with TypeScript using express and prisma. It's a service where you list user, create users, update them or even delete them.**

## 🚀 TECHNOLOGIES
- NodeJS
- Docker
- PostgreSQL
- Prisma
- Express
- TypeScript
- Jest 
- Supertest

## ✨ What I learned doing this project

- **Express** - I'm already familiarized with this framework, and doing this project I've learned how to use the router feature .

- **PostgreSQL** - With this project I also learned this incredible database, wich is one of the most used databases in the industry righ now.
- **Docker** - I learned how to use Docker with the going of this project, it's an impressive tool, I'm sure it'll help in my career, since it's so popular in the industry at the moment. 
- **Prisma** - First time using this amazing ORM. It has a very simple usage but yet so powerful, with a few lines of code you can store and validate data like never.
- **Jest** - It was doing this project that I learned how to make and manage tests on an application, it's quite simple once you get the flow of it, and a super-efficient tool for developers, it can save a lot of time.
- **Supertest**- Also first time using this technology, It was used combined with jest as I 
- **TypeScript** - It has been a great experience using and learning typescript, it's simply amazing how it can optimize work.
- **Heroku** - Last but not least, I've learned how to deploy an application on heroku, an amazing service.


## 🏁 How to test it
- Run `npm run test` and it'll have all the endpoints tested 

## ✅ How to run it locally

1. Run `git clone` and clone the repository </br>

2. Run `npm install` on the directory.</br>

3. Create in the root of your repository the file .env and set your database credentials as the example: DATABASE_URL="PostgresURL"

5. Run `npm run start` on terminal

## ☑️  How to run it locally with Docker

1. Get in the directory where it was cloned with `cd /user-api`
2. Create the image running `docker build -t api/user-api .`
3. Create a container running `docker run -p 3000:5000 api/user-api`
4. Acess `localhost:3000/` and now you can acess all the endpoints on localhost

## 📝API Endpoints
`GET` `/users` -> Return a list of all users </br>
`GET` `/users/:id` -> Return a specific user based on an id </br>
`POST` `/createuser` -> Create a new user based on the body of the request as -> user, email and name </br>
`PUT` `/updateuser/:id` -> Update a specific user based on an id and body of the request with new data as -> user, email and name </br>
`DELETE` `/products/:id` -> Delete a specific user based on an id </br>

## 🌌 Test API ONLINE
- Since the api is deployed on heroku, you can test the endpoints on your browser with the following url</br> `https://user-api-postgres-prisma.herokuapp.com/`

