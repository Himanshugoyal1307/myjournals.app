# Generated by Django 2.2.13 on 2022-12-24 16:55

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20221217_1638'),
    ]

    operations = [
        migrations.AddField(
            model_name='activity',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='activeimages'),
        ),
        migrations.AlterField(
            model_name='activity',
            name='task_date',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2022, 12, 24, 16, 55, 57, 382340, tzinfo=utc), null=True),
        ),
    ]