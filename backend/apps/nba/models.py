from datetime import datetime
from typing import Dict, List
from django.core.validators import MaxValueValidator
from django.db import models
from django.urls import reverse

SEASONS = [('REGULAR', 'Regular'), ('POST', 'Post')]

class Team(models.Model):
    team_id = models.AutoField(primary_key=True, default=None)
    team_name = models.CharField(max_length=50)
    team_logo = models.URLField()
    team_division = models.CharField(max_length=50)
    team_city = models.CharField(max_length=50)
    active_roster_cap = models.IntegerField(null=True)
    dead_cap = models.IntegerField(null=True)
    cap_hold = models.IntegerField(null=True)
    total_cap = models.IntegerField(null=True)
    cap_max_space = models.IntegerField(null=True)
    
    def __str__(self) -> str:
        """ 
        readable presentation
        """
        return self.get_team_name()
    def get_team_name(self) -> str:
        """
        Get name of the team city + name
        """
        return f"{self.team_city} {self.team_name}"
    def get_team_logo_path(self) -> str:
        """
        Return team logo
        """
        return f"images/{self.team_logo}.png"
    def get_absolute_url(self) -> str:
        return reverse("main:teams", args=[self.team_id])
    

"""
NBA TEAM STANDINGS
"""
# class Standings(models.Model):
#     """
#     Individual Team
#     """
#     team = models.OneToOneField(Team, on_delete=models.CASCADE, related_name='standing')
#     wins = models.IntegerField()
#     losses = models.IntegerField()
#     home_record = models.CharField(max_length=5)
#     away_record = models.CharField(max_length=5)
#     win_percentage = models.FloatField()
    
#     @property
#     def seed(self) -> int:
#         """
#         return seed of current team
#         """
#         conference_teams = Standings.objects.filter(team_team_conference = self.team.team_conference)
#         return list(conference_teams).index(self)+1
#     def get_wins_losses(self) -> str:
#         """
#         return team win/loss record
#         """
#         return f'{self.wins}-{self.losses}'

#     class Meta:
#         """
#         Standing Ordering
#         """
#         ordering = ['-win_percentage', '-wins', '-home_record', '-away_record']

#         def __str__(self) -> str:
#             """
#             readable presentation
#             """
#             return f'{self.team.get_team_name()} {self.get_wins_losses()}'
       

"""
PLAYER MODEL
"""
class Player(models.Model):
    player_id = models.AutoField(primary_key=True)
    jersey_number = models.IntegerField()
    player_image = models.URLField(null=True)
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    position = models.CharField(max_length=20)
    height = models.CharField(max_length=5)
    weight = models.IntegerField()
    age = models.IntegerField(null=True)
    team = models.ForeignKey("Team",on_delete=models.CASCADE)
    draft_year = models.CharField(max_length=20)
    draft_number = models.CharField(max_length=20)
    country = models.CharField(max_length=50)
    contract_year = models.IntegerField(null=True)
    contract_amount = models.IntegerField(null=True)
    average_salary = models.IntegerField(null=True)
    signed_using = models.CharField(max_length=50)
    base_salary = models.IntegerField(null=True)
    dead_cap = models.IntegerField(null=True)
    cap_figure = models.IntegerField(null=True)
    cap_percentage = models.FloatField(null=True)
    future_guranteed = models.IntegerField(null=True)
    injury = models.CharField(max_length=20)
    season_ending_injury = models.BooleanField(default=False)
     
    def get_player_full_name(self) ->str:
        return f'{self.first_name} {self.last_name}'
    
    # def get_latest_player_stats(self) -> PlayerSeasonStats:
    #     """
    #     get latest player stats
    #     """
    #     try:
    #         return self.season_stats.get(
    #             season_type='Regular',
    #             season='2019-2020'
    #         )
    #     except PlayerSeasonStats.MultipleObjectsReturned:
    #             return self.season_stats.get(
    #                 season_type='Regular',
    #                 season='2019-2020',
    #                 current_team__team_id = 0
    #         )


    class Meta:
        """
        ordering -> lastname + firstname
        """
        ordering = ['last_name', 'first_name']

        def __str__(self) -> str:
            return self.get_player_full_name()
       
"""
NBA SEASON STATS
"""
# class SeasonStats(models.Model):
#     minutes = models.FloatField()
#     points = models.FloatField()
#     offense_rebounds = models.FloatField()
#     defense_rebounds = models.FloatField()
#     rebounds = models.FloatField()
#     assists = models.FloatField()
#     steals = models.FloatField()
#     blocks = models.FloatField()
#     turnovers = models.FloatField()
#     fouls = models.FloatField()
#     field_goal_made = models.FloatField()
#     field_goal_attempt = models.FloatField()
#     field_goal_percent = models.FloatField(validators=[MaxValueValidator(1)])
#     field_goal3_made = models.FloatField()
#     field_goal3_attempt = models.FloatField()
#     field_goal3_percent = models.FloatField(validators=[MaxValueValidator(1)])
#     free_throw_made = models.FloatField()
#     free_throw_attempt = models.FloatField()
#     free_throw_percent = models.FloatField(validators=[MaxValueValidator(1)])
#     season_type = models.CharField(max_length=7, choices=SEASONS)

#     class Meta:
#         abstract:True

# """
# NBA TEAM STATS
# """
# class TeamSeasonStats(models.Model):
#     season = models.CharField(max_length=15)
#     team = models.ForeignKey(Team, on_delete=models.CASCADE, related_name='season_stats')
#     wins = models.IntegerField()
#     losses = models.IntegerField()
#     win_percentage = models.FloatField()

#     class Meta:
#         db_table = 'team_season_stats'
    
#     def __str__(self) -> str:
#         """
#         readable presentation
#         """
#         return self.team.get_team_name()
# """
# NBA PLAYER CAREER STATS
# """
# class PlayerCareerStats(models.Model):
#     player = models.ForeignKey(Player, on_delete=models.CASCADE, related_name='player_career_stats')
#     games_played = models.IntegerField()
#     games_started = models.IntegerField()

#     class Meta:
#         db_table = 'player_career_stats'
    
#     def __str__(self) -> str:
#         """
#         readable presentaion
#         """
#         return self.player.get_player_full_name
# """
# NBA PLAYER SEASON STATS
# """
# class PlayerSeasonStats(models.Model):
#     player = models.ForeignKey(Player, on_delete=models.CASCADE, related_name='player_season_stats')
#     current_team = models.ForeignKey(Team, on_delete=models.CASCADE, related_name='+')
#     season = models.CharField(max_length=15)
#     games_played = models.IntegerField(validators=[MaxValueValidator(82)])
#     games_started = models.IntegerField(validators=[MaxValueValidator(82)])

#     class Meta:
#         db_table = 'player_season_stats'
#         ordering = ['-season']
    
#     def __str__(self) -> str:
#         """
#         readable presentaion
#         """
#         return self.player.get_player_full_name()
        


