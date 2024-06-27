#TO RUN PROJECT
step 1: run npm i on cmd 
step 2:run npm start on cmd

- How long did it take you to complete this assignment?
  1 to 1.5 hr


  - What about this assignment did you find most challenging?
This is an easy assignment, but after a long time of writing separate servers using Express, I got confused.  From last year, I wrote Express code in Next.js, and due to the different syntax in Next.js, I got confused at the beginning.



  - What about this assignment did you find unclear?
The response is unclear and not proper as per the instruction. We are not returning a proper response; for example, even if user data is deleted or not, it still returns status 204. The same issue occurs for other cases as well.
for that we need to check whether data is deleted or not 
  
  - What challenges did you face that you did not expect?
    query paramater  


  - Do you feel like this assignment has an appropriate level of difficulty?
  Yes

  - Briefly explain your decisions to use tools, frameworks and libraries like fastapi, DRF etc.
  Choosing between these tools depends on your specific project requirements, existing technology stack, and performance needs. Both FastAPI and DRF are powerful options, and understanding their strengths will help you make an informed decision.






  - Did you make certain assumptions and decisions around the application? Please elaborate on your reasonings.
  Yes,same for adding more validation (like req.body is empty or not,checking data is delete successfully or not,validating email is in proper format or not)


  ## Bonus Points

- Build API documentation using [OpenAPI][1] spec
Api for update,delete,get
for update data use update method
for delete data use delete method
for get data use get method

http://localhost:4000/api/users/{id}

Api for get user data by passing query
http://localhost:4000/api/users?name=om&page=1&limit=2&&sort=age

Api for data user 
http://localhost:4000/api/users/

payload data-  {
      "id": 2,
      "first_name": "Josephine",
      "last_name": "Darakjy",
      "company_name": "Chanay, Jeffrey A Esq",
      "city": "Brighton",
      "state": "MI",
      "zip": 48116,
      "email": "josephine_darakjy@darakjy.org",
      "web": "http://www.chanayjeffreyaesq.com",
      "age": 48
    }


- Write unit tests and functional tests

http://localhost:4000/api/users?search=om&page=1&limit=2&sort=age
http://localhost:4000/api/users?search=sachin&page=1&limit=2&sort=age
http://localhost:4000/api/users?page=1&limit=2&sort=age
http://localhost:4000/api/users?page=2&limit=2&sort=-age
http://localhost:4000/api/users?page=1&limit=12&sort=age


http://localhost:4000/api/users/

payload data-  {
      "id": 2,
      "first_name": "Josephine",
      "last_name": "Darakjy",
      "company_name": "Chanay, Jeffrey A Esq",
      "city": "Brighton",
      "state": "MI",
      "zip": 48116,
      "email": "josephine_darakjy@darakjy.org",
      "web": "http://www.chanayjeffreyaesq.com",
      "age": 48
    }
http://localhost:4000/api/users/

payload data-  {
      "id": 21,
      "first_name": "yash",
      "last_name": "patil",
      "company_name": "Chanay, Jeffrey A Esq",
      "city": "Brighton",
      "state": "MI",
      "zip": 48116,
      "email": "josephine_darakjy@darakjy.org",
      "web": "http://www.chanayjeffreyaesq.com",
      "age": 48
    }

#   b a c k e n d _ a s s i g n m n e t  
 