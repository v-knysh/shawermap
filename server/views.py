import os
from pprint import pprint

from aiohttp import web

from models import create_tables
from db import go

async def index(request):
    await go(request.app['db'])
    # await create_tables(request.app['db'])
    with open(os.path.join('public', 'index.html')) as f:
        text = f.read()
        return web.Response(text=text, content_type='html')

