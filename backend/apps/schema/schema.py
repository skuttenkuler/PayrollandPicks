from graphene_django import DjangoObjectType
import graphene

from apps.users.models import User as UserModel
from apps.nba.models import Team as TeamModel
# from apps.nba.models import Team,Player,Standings,SeasonStats,TeamSeasonStats,PlayerCareerStats,PlayerSeasonStats
## USER QUERY
class User(DjangoObjectType):
    class Meta:
        model = UserModel

class Query(graphene.ObjectType):
    users = graphene.List(User)

    def resolve_users(self, info):
        return UserModel.objects.all()
## NBA QUERY
class Team(DjangoObjectType):
    class Meta:
        model = TeamModel

class Query(graphene.ObjectType):
    nba = graphene.List(Team)
    team_by_name = graphene.Field(Team, team_name=graphene.String())

    def resolve_nba(self, info):
        return TeamModel.objects.all()
    


schema = graphene.Schema(query=Query)