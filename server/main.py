from aiohttp import web
from routes import setup_routes

from config import get_config
from db import init_db, close_db


app = web.Application()
setup_routes(app)
app['config'] = get_config()

app.on_startup.append(init_db)
app.on_cleanup.append(close_db)

web.run_app(app, host='127.0.0.1', port=8080)
# web.run_app(app, host='192.168.1.138', port=8080)