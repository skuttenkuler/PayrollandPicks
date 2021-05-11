from graphene_django import DjangoObjectType
import graphene

from apps.users.models import User as UserModel
from apps.nba.models import Team as TeamModel, Player as PlayerModel
# from apps.nba.models import Team,Player,Standings,SeasonStats,TeamSeasonStats,PlayerCareerStats,PlayerSeasonStats
#TYPES
class User(DjangoObjectType):
    class Meta:
        model = UserModel

class Team(DjangoObjectType):
    class Meta:
        model = TeamModel

class Player(DjangoObjectType):
    class Meta:
        model = PlayerModel

#QUERYS
class Query(graphene.ObjectType):
    users = graphene.List(User)
    teams = graphene.List(Team)
    players = graphene.List(Player)

    def resolve_users(self, info):
        return UserModel.objects.all()

    def resolve_teams(self, info):
        return TeamModel.objects.all()
    
    def resolve_players(self, info):
        return PlayerModel.objects.all()


schema = graphene.Schema(query=Query)