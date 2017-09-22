import os

from aiohttp import web


async def index(request):
    with open(os.path.join('public', 'index.html')) as f:
        text = f.read()
        return web.Response(text=text, content_type='html')

