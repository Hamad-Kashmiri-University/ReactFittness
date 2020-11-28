from rest_framework import serializers
from .models import profile

class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = profile
        fields = ('name','maxHR','stepcount','weight')

#serialiser lets us convert database table information into readable json for the api