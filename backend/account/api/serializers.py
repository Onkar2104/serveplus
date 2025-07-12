from rest_framework.serializers import ModelSerializer
from ..models import *

class AccountSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ('email', 'password')