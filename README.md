# Users Deletion Script 

Below you will find some information on how to perform common tasks.<br>

## Table of Contents
- [Installing a Dependency](#installing-a-dependency)
- [Requirements](#requirements)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)

## Installing a Dependency

```sh
npm install
```

## Requirements

In your firebase project you must generate a Service Account Key. 

![Firebase Admin SDK](https://hackernoon.com/hn-images/1*1aRZ-Z32fyG6zv4zpvcZAw.png)

Once downloaded, set this command in your terminal

```sh
export GOOGLE_APPLICATION_CREDENTIALS="/path/serviceAccount.json"
```

Then run the script with

```sh
npm start
```


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app and start searching a deleting all users from your firebase app
You will also see the logs of each user deleted.
