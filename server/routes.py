from server.views import index, point_add, points_all


def setup_routes(app):
    app.router.add_get('/', index)
    app.router.add_get('/points/add', point_add)
    app.router.add_get('/points/all', points_all)
    app.router.add_static('/static/', '../public', show_index=True)