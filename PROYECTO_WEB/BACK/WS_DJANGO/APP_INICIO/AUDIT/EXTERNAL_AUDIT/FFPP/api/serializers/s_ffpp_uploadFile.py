from rest_framework import serializers
from ......models import PlantillaFFPPRellena_Model

class PlantillaFFPPRellena_Serializer(serializers.ModelSerializer):
    class Meta:
        model = PlantillaFFPPRellena_Model
        fields = "__all__"