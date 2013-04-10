#!/usr/bin/env python

from django.contrib import admin
from diabetesapp.models import Map



class MapAdmin(admin.ModelAdmin):
    search_fields = ('name',)
admin.site.register(Map, MapAdmin)







