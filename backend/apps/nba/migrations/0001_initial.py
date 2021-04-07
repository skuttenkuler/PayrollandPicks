# Generated by Django 3.1.7 on 2021-04-02 23:39

import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Player',
            fields=[
                ('player_id', models.AutoField(primary_key=True, serialize=False)),
                ('first_name', models.CharField(max_length=20)),
                ('last_name', models.CharField(max_length=20)),
                ('dob', models.CharField(max_length=20)),
                ('jersey', models.IntegerField()),
                ('postition', models.CharField(max_length=20)),
                ('height', models.CharField(max_length=5)),
                ('weight', models.IntegerField()),
                ('draft_year', models.CharField(max_length=20)),
                ('draft_round', models.CharField(max_length=20)),
                ('draft_number', models.CharField(max_length=20)),
                ('signed_using', models.CharField(max_length=50)),
                ('base_salary', models.IntegerField(null=True)),
                ('dead_cap', models.IntegerField(null=True)),
                ('cap_figure', models.IntegerField(null=True)),
                ('cap_percentage', models.FloatField(null=True)),
                ('future_guranteed', models.IntegerField(null=True)),
            ],
            options={
                'ordering': ['last_name', 'first_name'],
            },
        ),
        migrations.CreateModel(
            name='SeasonStats',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('minutes', models.FloatField()),
                ('points', models.FloatField()),
                ('offense_rebounds', models.FloatField()),
                ('defense_rebounds', models.FloatField()),
                ('rebounds', models.FloatField()),
                ('assists', models.FloatField()),
                ('steals', models.FloatField()),
                ('blocks', models.FloatField()),
                ('turnovers', models.FloatField()),
                ('fouls', models.FloatField()),
                ('field_goal_made', models.FloatField()),
                ('field_goal_attempt', models.FloatField()),
                ('field_goal_percent', models.FloatField(validators=[django.core.validators.MaxValueValidator(1)])),
                ('field_goal3_made', models.FloatField()),
                ('field_goal3_attempt', models.FloatField()),
                ('field_goal3_percent', models.FloatField(validators=[django.core.validators.MaxValueValidator(1)])),
                ('free_throw_made', models.FloatField()),
                ('free_throw_attempt', models.FloatField()),
                ('free_throw_percent', models.FloatField(validators=[django.core.validators.MaxValueValidator(1)])),
                ('season_type', models.CharField(choices=[('REGULAR', 'Regular'), ('POST', 'Post')], max_length=7)),
            ],
        ),
        migrations.CreateModel(
            name='Team',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('team_name', models.CharField(max_length=50)),
                ('team_logo', models.CharField(max_length=50)),
                ('team_division', models.CharField(max_length=50)),
                ('team_conference', models.CharField(max_length=50)),
                ('team_city', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='TeamSeasonStats',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('season', models.CharField(max_length=15)),
                ('wins', models.IntegerField()),
                ('losses', models.IntegerField()),
                ('win_percentage', models.FloatField()),
                ('team', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='season_stats', to='nba.team')),
            ],
            options={
                'db_table': 'team_season_stats',
            },
        ),
        migrations.CreateModel(
            name='Standings',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('wins', models.IntegerField()),
                ('losses', models.IntegerField()),
                ('home_record', models.CharField(max_length=5)),
                ('away_record', models.CharField(max_length=5)),
                ('win_percentage', models.FloatField()),
                ('team', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='standing', to='nba.team')),
            ],
            options={
                'ordering': ['-win_percentage', '-wins', '-home_record', '-away_record'],
            },
        ),
        migrations.CreateModel(
            name='PlayerSeasonStats',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('season', models.CharField(max_length=15)),
                ('games_played', models.IntegerField(validators=[django.core.validators.MaxValueValidator(82)])),
                ('games_started', models.IntegerField(validators=[django.core.validators.MaxValueValidator(82)])),
                ('current_team', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='+', to='nba.team')),
                ('player', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='player_season_stats', to='nba.player')),
            ],
            options={
                'db_table': 'player_season_stats',
                'ordering': ['-season'],
            },
        ),
        migrations.CreateModel(
            name='PlayerCareerStats',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('games_played', models.IntegerField()),
                ('games_started', models.IntegerField()),
                ('player', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='player_career_stats', to='nba.player')),
            ],
            options={
                'db_table': 'player_career_stats',
            },
        ),
        migrations.AddField(
            model_name='player',
            name='team',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='nba.team'),
        ),
    ]