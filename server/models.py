import asyncio
import aiopg
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

metadata = sa.MetaData()

point_table = sa.Table('Point', metadata,
    sa.Column('id', sa.Integer, primary_key=True, autoincrement=True),
    sa.Column('name', sa.String(60), unique=False, nullable=False),
    sa.Column('address', sa.String(100)),
    sa.Column('lat', sa.Float(precision=10, scale=16)),
    sa.Column('lng', sa.Float(precision=10, scale=16)),
    sa.Column('description', sa.Text, nullable=True),
    # sa.Column('author_id ', sa.Integer, sa.ForeignKey('user.id')),
    sa.Column('rating', sa.Float(precision=10, scale=13)),
    # sa.PrimaryKeyConstraint('author', 'User', backref='point', lazy='dynamic'),
    )



ROLE_USER = 0
ROLE_ADMIN = 1

user_table = sa.Table('User', metadata,
    sa.Column('id', sa.Integer, primary_key=True, autoincrement=True),
    sa.Column('username', sa.String(80), unique=True),
    sa.Column('email', sa.String(120), unique=True),
    sa.Column('role', sa.SmallInteger, default=ROLE_USER),
    # sa.relationship('points ', saPoint', backref='author', lazy='dynamic'),
    sa.Column('password_hash', sa.String(255), nullable=False),
      )
