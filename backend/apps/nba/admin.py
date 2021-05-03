from django.contrib import admin
# Register your models here.
from .models import Team,Player


admin.site.register(Team)
# admin.site.register(Standings)
admin.site.register(Player)
# admin.site.register(SeasonStats)
# admin.site.register(TeamSeasonStats)
# admin.site.register(PlayerCareerStats)
# admin.site.register(PlayerSeasonStats)
