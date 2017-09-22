from views import index


def setup_routes(app):
    app.router.add_get('/', index)
    app.router.add_static('/static/', './public', show_index=True)