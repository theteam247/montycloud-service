# montycloud-service

## Quick Overview

```shell
npm install
npm run dev
```

you can run some built-in commands:

### `npm start`

Runs the app in production

## API

- Return HTTP/204

```
GET /health-check
```

- Return HTTP/200 with a stream of data stored in <file_name> if file_name is found in the local repository (file system for now but extensible to any other storage like s3 in the future); HTTP/404 if the file_name is not present in local repository


```
GET /store/<file_name>
```

- Return HTTP/200 with stats like current QPS, QPM and total number of operations handled by the service since it last started by category (call type like create, delete, health check etc) 

```
GET /stats
```
