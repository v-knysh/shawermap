import os
from pprint import pprint
import json

from aiohttp import web

from server.db import points_insert, points_select

async def index(request):
    await go(request.app['db'])
    with open(os.path.join('public', 'index.html')) as f:
        text = f.read()
        return web.Response(text=text, content_type='html')

async def point_add(request):
    await points_insert(request.app['db'])
    return web.Response(text='insert ok')


async def points_all(request):
    points = await points_select(request.app['db'])
    return web.Response(text=json.dumps(points), content_type='json')

