# Initial:

- install python3.6
- install node 6.x+


## install python packages:
`pip install -r requirements.txt`

## install node modules:
`npm install`

## install postgres
- add user from config.yaml

Migrate:
```
cd server/
alembic upgrade head
```

# Run:

## Server:
```
server/main.py
```

## webpack:
```
npm run webpack --colors --watch
```

## Generate migrations:
```
cd server/
alembic revision --autogenerate -m "added point and user tables"
```

