from django.db import models
from country.models import Country

# Create your models here.
class Conquered(models.Model):
    country_id=models.ForeignKey(Country, on_delete=models.CASCADE)