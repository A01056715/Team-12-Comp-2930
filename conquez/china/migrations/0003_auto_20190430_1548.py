# Generated by Django 2.2 on 2019-04-30 15:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('china', '0002_auto_20190430_1548'),
    ]

    operations = [
        migrations.AlterField(
            model_name='question',
            name='question',
            field=models.CharField(default='', editable=False, max_length=30),
        ),
    ]
