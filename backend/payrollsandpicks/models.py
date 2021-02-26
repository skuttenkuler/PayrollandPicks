from django.db import models

# Create your models here.
class Team(models.Model):
    name = models.CharField(max_length=50)

class Player(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    number = models.IntegerField()
    team = models.ForeignKey("Team",on_delete=models.CASCADE)

class Contract(models.Model):
    player = models.ForeignKey("Player",on_delete=models.CASCADE)
    team = models.ForeignKey("Team",on_delete=models.CASCADE)
    years = models.IntegerField()
    contract_salary = models.IntegerField(float)