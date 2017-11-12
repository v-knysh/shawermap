"""added point and user tables

Revision ID: 8d9272784b2a
Revises: 
Create Date: 2017-10-06 13:21:42.233341

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '8d9272784b2a'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('Point',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=60), nullable=False),
    sa.Column('address', sa.String(length=100), nullable=True),
    sa.Column('lat', sa.Float(precision=10), nullable=True),
    sa.Column('lng', sa.Float(precision=10), nullable=True),
    sa.Column('description', sa.Text(), nullable=True),
    sa.Column('rating', sa.Float(precision=10), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('User',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=80), nullable=True),
    sa.Column('email', sa.String(length=120), nullable=True),
    sa.Column('role', sa.SmallInteger(), nullable=True),
    sa.Column('password_hash', sa.String(length=255), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('User')
    op.drop_table('Point')
    # ### end Alembic commands ###
