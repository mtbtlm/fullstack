# Film_Project
> A film project with Damien BALLATORE, Mathieu BARTHELEMY, Quentin POLGE

In this project, the goal was to develop an API to display films.


### Backend
For the backend part we used the flask framework.

We use a virtual environment for the backend, so you need to start one: go to backend\env\Scripts and type 'activate' in terminal.

Once it's done, go to the folder \backend\ and start 'python base.py'. It is located at http://localhost:5000/

### Frontend 
For the frontend part we used ReactJs.
To start the application, first go to the root and type 'npm install' at least once, and then 'npm start'.
It is located at http://localhost:3000/



## User section 
When you are in the app, you can use the searchbar to search the film you want.
There are also three buttons that can show you the top 5 of films according to their category.

![Anime list](https://github.com/ZenosukeFukami/Anime_Project/blob/main/images/anime_list_blog.png)
If you are logged in you can write a comment here :
![comment](https://github.com/ZenosukeFukami/Anime_Project/blob/main/images/comments.png)
Else, you can login here or register :
![registe](https://github.com/ZenosukeFukami/Anime_Project/blob/main/images/register.png)


Here is the list of users in the admin part of the api :
![userlist](https://github.com/ZenosukeFukami/Anime_Project/blob/main/images/userlist.png)


### Issue
The only main issue we got is with the login and register page, while is it possible to log with a username and password already in the database, if we make a mistake the front will still create a token define as undefined. This lead to the switch of the webpage to the one that show the anime list. But while the token is present but not define, the access to the api/animes will be forbidden leading to an error. The problem is that the fetch function don't take 404 bad request as an error so the creation of the token is made. The only solution is to mannually delete the token "mytoken" using f12 and going in the Application section.

The same problem is existing for the register where using the api url localhost:8000/api/users we can post a new user but using the front the acess is forbidden, don't understand why.