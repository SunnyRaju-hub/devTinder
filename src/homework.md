- Create a repository
- Initailize the repository
- Difference between node_modules.package-lock.json,package.json 
- Install express
- Create a server
- Listen to port 7777
- Write request handlers for /test , /hello
- Install nodemon and update scripts inside package.json
- Difference b/w ^(caret) and ~(tilde)
- What are the depenceices in package.json

-Initialize git 
-.gitignore
- Create a new remote  repository on github
- Push all code to the remote origin 
- Play with routes and route extensions ex /hello , /hello/2 
- Order of the routes are matter a lot
- Install postman and make a workspace/collection > test api call
- Write logic handle GET POST PUT PATCH DELETE API calls and test them on postman
- Explore routing and use of ? , + , () , *
- Use of regex in routes /a/ , /.fly$/
- Read the query params in the routes
- Readding the dynamic routes

- Mutiple route handlers - Play with code
- next()
- next function and errors along with res.send()
- app.use("/route",[rh,rh2,rh3,rh4,rh5])
- What is middleware in nodejs
- How express js basically handles requests behind the scenes
- Diffrence b/w app.use() and app.all()
- Write a dummy auth middleware for auth 
- Write a dummy auth middleware for all user routes , except for /user/login
- Error handling using app.use(err,req,res,next)

seaon-02-06
- Create a free cluster on mongodb official website
- Install mongoose lib
- Connect your application to the database <connection url>/devTinder
- Call the connectDB function and connect to the database before starting the express server on 3000 port
- Create a user Schema and usermodel
- Create a post Api /singup   add data to the database
- Push some documents from the postman using signup api

Season02-07
- What is the difference between javascript and JSON object
- Add the express.json() middleware to your app
- Make your /signup app dynamic to receive data  from the end user

