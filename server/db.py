import aiopg.sa
import sqlalchemy as sa
from pprint import pprint
import random

from server.models import point_table

async def init_db(app):
    pprint(aiopg.sa)
    conf = app['config']['DATABASE']
    pprint(conf)
    engine = await aiopg.sa.create_engine(
        database=conf['NAME'],
        user=conf['USER'],
        password=conf['PASSWORD'],
        host=conf['HOST'],
        port=conf['PORT'],
    )
    app['db'] = engine


async def close_db(app):
    app['db'].close()
    await app['db'].wait_closed()


async def points_select(engine):
    async with engine.acquire() as conn:
        query = point_table.select()
        rows = await conn.execute(query)
        points_list = [dict(zip(row.keys(), row.values())) for row in rows]
        print(points_list)
        return points_list


async def points_insert(engine):
    async with engine.acquire() as conn:
        points = generate_random_point(5)
        query = point_table.insert(points)
        res = await conn.execute(query)
        print(res)


def generate_random_point(count):
    res = []
    for i in range(1, count + 1):

        lat_max = 50.5167
        lng_max = 30.6314
        lat_min = 50.3991
        lng_min = 30.3921



        point = {
            'name': f'test_name_{i}',
            'address': f'test_addr_{i}',
            'lat': random.uniform(lat_min, lat_max),
            'lng': random.uniform(lng_min, lng_max),
            'rating': random.uniform(1, 5),
            'description': f'test_descr_{i}',
        }
        res.append(point)
    return res