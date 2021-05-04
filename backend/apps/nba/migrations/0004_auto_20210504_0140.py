# Generated by Django 3.2 on 2021-05-04 01:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('nba', '0003_auto_20210503_2251'),
    ]

    operations = [
        migrations.AddField(
            model_name='team',
            name='active_roster_cap',
            field=models.IntegerField(null=True),
        ),
        migrations.AddField(
            model_name='team',
            name='cap_hold',
            field=models.IntegerField(null=True),
        ),
        migrations.AddField(
            model_name='team',
            name='cap_max_space',
            field=models.IntegerField(null=True),
        ),
        migrations.AddField(
            model_name='team',
            name='dead_cap',
            field=models.IntegerField(null=True),
        ),
        migrations.AddField(
            model_name='team',
            name='total_cap',
            field=models.IntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='team',
            name='team_logo',
            field=models.URLField(),
        ),
    ]
