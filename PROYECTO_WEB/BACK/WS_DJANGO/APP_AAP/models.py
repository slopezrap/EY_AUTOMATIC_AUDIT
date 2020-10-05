from django.db import models
from django.conf import settings
# Create your models here.

class PlantillaFFPPRellena_Model(models.Model):
    plantilla_xlsx = models.FileField(null=False, blank=False,upload_to=settings.MEDIA_EXTERNAL_AUDIT_FFPP,max_length=2000)

    def __str__(self):
        return self.plantilla_xlsx.name

    class Meta:
        verbose_name = "PlantillaFFPPRellena"
        verbose_name_plural = "PlantillasFFPPRellenas"

