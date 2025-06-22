from rest_framework.routers import DefaultRouter

from api.views import CountryViewset, LeagueViewset, CharacteristicViewset, FootballClubViewset

router = DefaultRouter()
router.register('country', CountryViewset, basename='country')
router.register('league', LeagueViewset, basename='league')
router.register('characteristic', CharacteristicViewset, basename='characteristic')
router.register('football-club', FootballClubViewset, basename='football_club')
urlpatterns = router.urls
