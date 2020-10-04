from django.contrib import admin
from .models import PlantillaFFPPRellena_Model

# Register your models here.
class PlantillaFFPPRellena_Admin(admin.ModelAdmin):
    order_by = ('plantilla_xlsx')

admin.site.register(PlantillaFFPPRellena_Model, PlantillaFFPPRellena_Admin)