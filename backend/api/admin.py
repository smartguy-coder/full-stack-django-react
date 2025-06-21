from django.contrib import admin

from .models import Country, Characteristic, FootballClub, League

admin.site.register(Country)
admin.site.register(Characteristic)
admin.site.register(FootballClub)
admin.site.register(League)
