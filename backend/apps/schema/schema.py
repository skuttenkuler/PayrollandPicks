from graphene_django import DjangoObjectType
import graphene

from apps.users.models import User
from apps.nba.models import Team, Player
# from apps.nba.models import Team,Player,Standings,SeasonStats,TeamSeasonStats,PlayerCareerStats,PlayerSeasonStats
#TYPES
class UserType(DjangoObjectType):
    class Meta:
        model = User

class TeamType(DjangoObjectType):
    class Meta:
        model = Team

class PlayerType(DjangoObjectType):
    class Meta:
        model = Player

#QUERYS
class Query(graphene.ObjectType):
    users = graphene.List(UserType)
    teams = graphene.List(TeamType)
    players = graphene.List(PlayerType)
    team = graphene.Field(TeamType, id=graphene.Int())
    player = graphene.Field(PlayerType, id=graphene.Int())

    def resolve_users(self, info, **kwargs):
        return User.objects.all()

    def resolve_player(self, info, **kwargs):
        id = kwargs.get('id')

        if id is not None:
            return Player.objects.get(pk=id)
        
        return None

    def resolve_team(self, info, **kwargs):
        id = kwargs.get('id')

        if id is not None:
            return Team.objects.get(pk=id)
        
        return None

    def resolve_teams(self, info):
        return Team.objects.all()
    
    def resolve_players(self, info):
        return Player.objects.all()


schema = graphene.Schema(query=Query)