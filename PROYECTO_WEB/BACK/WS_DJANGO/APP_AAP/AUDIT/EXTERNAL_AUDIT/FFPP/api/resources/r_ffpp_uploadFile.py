"""
Son como los views.py de Django. Es la lógica.
Las views no son más que extensiones de las class-view de django,
pero de alguna forma vitaminadas para simplificarnos el enganche con los routers,
los serializadores y los modelos y en lugar de renderizar un html como respuesta devolver de forma sencilla un json,
xml u otra estructura de datos que nos interese que devuelva nuestra API. En este punto prima la convención sobre
la configuración pudiendo basarnos en las clases standards de la librería para describir en muy pocas líneas nuestra API
"""

from rest_framework import views
from rest_framework.response import Response
from rest_framework import status
from ..serializers.s_ffpp_uploadFile import PlantillaFFPPRellena_Serializer
import os
from django.conf import settings

class ffppUploadFile_View(views.APIView):
    permission_classes = ()
    authentication_classes = ()

    #POST en CRUD es create
    def post(self, request, *args, **kwargs):
      file_serializer = PlantillaFFPPRellena_Serializer(data=request.data)
      if file_serializer.is_valid():
          file_serializer.save()
          return Response(file_serializer.data, status=status.HTTP_201_CREATED)
      else:
          return Response(file_serializer.errors, status=status.HTTP_400_BAD_REQUEST)