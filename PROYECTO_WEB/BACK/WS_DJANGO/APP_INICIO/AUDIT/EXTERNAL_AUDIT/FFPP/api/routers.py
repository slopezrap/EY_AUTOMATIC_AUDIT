"""
Son como los urls.py de Django.
Los routers son una herramienta que nos permiten definir las urls de nuestro API de una manera sencilla y ordenada.
Básicamente nos permiten definir limpiamente qué método de una class view se ejecutará al llegar una petición HTTP
contra un path concreto usando un verbo HTTP u otro. En resumen nos permiten definir cómodamente conjuntos de urls
y nos encaminan a nuestros métodos en función del verbo HTTP (GET, POST, PUT, PATCH…).
"""

from django.urls import path
from ..api.resources.r_ffpp_uploadFile import ffppUploadFile_View
from django.conf.urls import include
from rest_framework import routers


router_user = routers.DefaultRouter()


urlpatterns = [
    path('', include(router_user.urls)),
    path('ffpp/upload/', ffppUploadFile_View.as_view(), name='ffppUpload'),
]