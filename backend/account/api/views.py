from rest_framework.viewsets import ModelViewSet
from ..models import *
from .serializers import *

class UserViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = AccountSerializer