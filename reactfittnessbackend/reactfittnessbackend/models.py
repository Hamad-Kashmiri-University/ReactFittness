from django.db import models

class profile(models.Model):
    name = models.CharField(max_length=100)
    maxHR = models.IntegerField()
    stepcount = models.IntegerField()
    weight = models.FloatField()
    
    def __str__(self):
        return self.name
    

#Example of a table in our db to be used in profile page, we use this table to connect to the api