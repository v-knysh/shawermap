import aiopg.sa
from pprint import pprint

from models import point_table

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
        echo=True,
    )
    app['db'] = engine


async def close_db(app):
    app['db'].close()
    await app['db'].wait_closed()


async def go(engine):
    async with engine:
        async with engine.acquire() as conn:
            res = await conn.execute("SELECT 1")
            print(res.__dict__)



