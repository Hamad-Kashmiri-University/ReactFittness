from .models import profile 
from .serializers import LeadSerializer
from rest_framework import generics # generic views from rest framework

class profileviewapi(generics.ListCreateAPIView):
    queryset = profile.objects.all()  #takes data from the table
    serializer_class = LeadSerializer
#post api view
class profilelistapi(generics.ListAPIView):
    queryset = profile.objects.all()
    serializer_class = LeadSerializer
#list  api view

class profileretrieveapi(generics.RetrieveAPIView):
    queryset = profile.objects.all()
    serializer_class = LeadSerializer
#get api view

# this allows us to get and post data to the api