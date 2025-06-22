from django.shortcuts import render
from rest_framework.viewsets import ViewSet
from rest_framework.permissions import AllowAny, IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from .models import Country, League, Characteristic, FootballClub

from .serializers import CountrySerializer, LeagueSerializer, CharacteristicSerializer, FootballClubSerializer


class CountryViewset(ViewSet):
    permission_classes = [AllowAny]
    queryset = Country.objects.all()
    serializer_class = CountrySerializer

    def list(self, request):
        queryset = Country.objects.all()
        serializer = self.serializer_class(queryset, many=True)
        return Response(data=serializer.data)


class LeagueViewset(ViewSet):
    permission_classes = [AllowAny]
    queryset = League.objects.all()
    serializer_class = LeagueSerializer

    def list(self, request):
        queryset = League.objects.all()
        serializer = self.serializer_class(queryset, many=True)
        return Response(data=serializer.data)


class CharacteristicViewset(ViewSet):
    permission_classes = [AllowAny]
    queryset = Characteristic.objects.all()
    serializer_class = CharacteristicSerializer

    def list(self, request):
        queryset = Characteristic.objects.all()
        serializer = self.serializer_class(queryset, many=True)
        return Response(data=serializer.data)


class FootballClubViewset(ViewSet):
    permission_classes = [AllowAny]
    queryset = FootballClub.objects.all()
    serializer_class = FootballClubSerializer

    def list(self, request):
        queryset = FootballClub.objects.all()
        serializer = self.serializer_class(queryset, many=True)
        return Response(data=serializer.data)
