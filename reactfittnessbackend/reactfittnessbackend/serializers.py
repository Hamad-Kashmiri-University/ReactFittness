from rest_framework import serializers
from .models import profile

class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = profile
        fields = ('name','maxHR','stepcount','weight')

#serialiser lets us convert json into a model for the api