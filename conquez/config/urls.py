"""config URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.contrib.auth import views as auth_views
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.auth import views as auth_views

import brazil.views
import india.views
import turkey.views
import canada.views
import authen.views
import country.views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('china/', country.views.china, name='china'),
    path('canada/', canada.views.base, name='canada'),
    path('brazil/', brazil.views.base, name='brazil'),
    path('india/', india.views.base, name='india'),
    path('turkey/', turkey.views.base, name='turkey'),
    path('antarctica', country.views.antarctica, name='antarctica'),
    path("login/", authen.views.login, name="login"),
    path("logout/", auth_views.LogoutView.as_view(), name="logout"),
    path('profile/', authen.views.profile, name='profile'),
    path('social-auth/', include('social_django.urls', namespace="social")),
    path('oauth/', include('social_django.urls', namespace="social")),
    path('home/', authen.views.home, name='home'),
    path('', authen.views.splash, name='splash')
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
