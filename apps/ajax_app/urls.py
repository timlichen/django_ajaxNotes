from django.conf.urls import url, include
from . import views
# from django.contrib import admin

urlpatterns = [
    url(r'^$', views.index),
    url(r'^postNote$', views.postNote, name="postNote"),
    url(r'^deleteNote/(?P<noteID>[0-9]+)$', views.deleteNote, name="deleteNote"),
]


# (?P<noteID>[0-9])
