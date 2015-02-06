# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Friendship',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, verbose_name='ID', auto_created=True)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='Session',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, verbose_name='ID', auto_created=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('destroyed_at', models.DateTimeField()),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, verbose_name='ID', auto_created=True)),
                ('oauth_uid', models.CharField(max_length=255)),
                ('oauth_provider', models.CharField(max_length=255)),
                ('username', models.CharField(max_length=255)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.AddField(
            model_name='session',
            name='user_id',
            field=models.ForeignKey(to='users.User'),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='friendship',
            name='friend_id',
            field=models.ForeignKey(related_name='the_friend', to='users.User'),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='friendship',
            name='user_id',
            field=models.ForeignKey(related_name='the_user', to='users.User'),
            preserve_default=True,
        ),
    ]
