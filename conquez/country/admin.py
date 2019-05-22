from django.contrib import admin
from .models import Country, Question

# Register the Country and Question model so that it appears on the Django admin page
admin.site.register(Country)
admin.site.register(Question)
