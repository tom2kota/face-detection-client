# Face detection App - Client

- [Client repo](https://github.com/tom2kota/face-detection-client)

- [Server repo](https://github.com/tom2kota/face-detection-server)

- [Client DEMO](https://face-detection-client.vercel.app)

--------------------

Clone repos & run
```
npm install

npm audit fix

npm start
```

--------------------

Server requires docker run
```
sudo docker-compose up
sudo docker-compose up --build

sudo docker-compose ps
sudo docker-compose down

sudo docker ps
sudo docker stop
```

```
        ...
Starting redis ... 
Starting postgres ... 
Starting backend  ... 
```
 
BACKEND URL:
```
https://localhost:3001 
```
 
POSTGRES SETTINGS:
```
databases/face-detection/schemas/public/tables/ { login } & { users }
postgres://admin:password@localhost:5432/face-detection

URL:        jdbc:postgresql://localhost:5432/face-detection
USER:       admin
PASSWORD:   password
HOST:       localhost
PORT:       5432
```

REDIS_URL:
``` 
https://localhost:6379
```


--------------------

[Tachyons styles](https://tachyons.io/docs/)

[Table of Styles](https://tachyons.io/docs/table-of-styles/)

[Table of Properties](https://tachyons.io/docs/table-of-properties/)

 --------------------
 
 ## feature for multiple faces detection: [here](https://github.com/aneagoie/smart-brain-boost/commit/09961431e44692473533cfdd8526aaa8bce5a0be)
 
 [try to detect faces:](https://static01.nyt.com/images/2019/10/02/video/02-still-for-america-room-loop/02-still-for-america-room-loop-jumbo.jpg)
 