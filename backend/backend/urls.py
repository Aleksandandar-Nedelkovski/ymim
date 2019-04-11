from django.contrib import admin
from django.urls import path, include
from healthcheck import views

from events import endpoints


urlpatterns = [
    path("admin/", admin.site.urls),
    path("applications/", admin.site.urls),
    path("api-auth/", include("rest_framework.urls")),
    path("auth/", include("djoser.urls")),
    path("auth/", include("djoser.urls.authtoken")),
    path("auth/", include("djoser.urls.jwt")),
    path("api/healthcheck", views.healthcheck),
    path('api/', include(endpoints)),
]
