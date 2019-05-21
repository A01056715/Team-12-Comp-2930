from django.contrib import admin
from django.urls import path, include
from django.contrib.auth import views as auth_views
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.auth import views as auth_views
from django.conf.urls import handler404, handler500

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
    path('oauth/', include('social_django.urls', namespace="social_django")),
    path('home/', authen.views.home, name='home'),
    path('', authen.views.splash, name='splash'),
    path('update_score/', country.views.update_score),
    path('aboutus/', authen.views.aboutus, name='aboutus'),
    path('howtoplay/', authen.views.howtoplay, name='howtoplay')
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

handler404 = 'authen.views.view_404'
handler500 = 'authen.views.view_500'