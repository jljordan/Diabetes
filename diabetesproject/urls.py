from django.conf.urls import patterns, include, url

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'diabetesproject.views.home', name='home'),
    # url(r'^diabetesproject/', include('diabetesproject.foo.urls')),
 url(r'^$', 'diabetesapp.views.home', name='home'),
 url(r'^map-data/$', 'diabetesapp.views.mapData', name='map_list'),
 url(r'^graphic/$', 'diabetesapp.views.graphic', name='graphic'),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
     url(r'^admin/', include(admin.site.urls)),
)
