from graphene_django import DjangoObjectType
import graphene

from apps.users.models import User as UserModel
from apps.nba.models import NBA as NBAModel
## USER QUERY
class User(DjangoObjectType):
    class Meta:
        model = UserModel

class Query(graphene.ObjectType):
    users = graphene.List(User)

    def resolve_users(self, info):
        return UserModel.objects.all()
## NBA QUERY
class NBA(DjangoObjectType):
    class Meta:
        model = NBAModel

class Query(graphene.ObjectType):
    nba = graphene.List(NBA)

    def resolve_nba(self, info):
        return NBAModel.objects.all()


schema = graphene.Schema(query=Query)