# Vue Firebase Simple Chat

> A very simple chat backed by Firebase and Handled by Vue 2.

> Single key based authentication created over email/pass authentication.

> The purpose of this project is to show some Vue's features.


## Run Setup

``` bash
# install dependencies
git clone https://github.com/gmeneguz/vue-firebase-chat.git

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## Create your own Firebase Vue Chat

 - Clone this repo
 - Create a project on [Firebase](https://console.firebase.google.com/) (free)
 - Click on Add Web App. It will show the initialization code. Copy the content of the **config** object and paste inside **firebaseConfig** const on src/db/config.js.
 - Activate Email Authentication in Firebase Console of your project (https://console.firebase.google.com/?hl=pt-br) and create a single user with an email and password (I used default@default.com)
 - It should generate an Id for the user, copy the id and paste the following in your Database Rules [https://console.firebase.google.com/project/{{YOUR_PROJECT_NAME}}/database/rules]:
```javascript
  {
    "rules": {
      ".read": "auth.uid == 'YOUR_GENERATED_USER_ID'",
      ".write": "auth.uid == 'YOUR_GENERATED_USER_ID'"
    }
 }
 ```
 With this rule, just your user can read and modify data in firebase.

 - Replace the defaultEmail in src/db/config.js with email you just created.
 - Run the Project (see Build Setup)
 - To login, use any user you want and the key is the password you created.
 - Go ahead and create a much better chat ;)

## Notes

Created with vue-cli
