Scripts:

Server:
server/main.py

webpack:
npm run webpack --colors --watch

Generate migrations:
alembic revision --autogenerate -m "added point and user tables"

Migrate:
alembic upgrade head
