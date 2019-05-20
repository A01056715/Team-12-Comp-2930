from django.contrib import admin
from django.urls import path, include
from django.contrib.auth import views as auth_views
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.auth import views as auth_views

import authen.views
import country.views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('china/', country.views.china, name='china'),
    path('canada/', country.views.canada, name='canada'),
    path('brazil/', country.views.brazil, name='brazil'),
    path('india/', country.views.india, name='india'),
    path('turkey/', country.views.turkey, name='turkey'),
    path('antarctica', country.views.antarctica, name='antarctica'),
    path("login/", authen.views.login, name="login"),
    path("logout/", auth_views.LogoutView.as_view(), name="logout"),
    path('profile/', authen.views.profile, name='profile'),
    path('social-auth/', include('social_django.urls', namespace="social")),
    path('oauth/', include('social_django.urls', namespace="social")),
    path('home/', authen.views.home, name='home'),
    path('', authen.views.splash, name='splash'),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
