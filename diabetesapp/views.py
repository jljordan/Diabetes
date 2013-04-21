# Create your views here.
from diabetesapp.models import Map
from django.shortcuts import render, get_object_or_404
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger


def home(request):
    return render(request, "home.html")

def mapData(request):
        
    map_list = Map.objects.all()
    paginator = Paginator(map_list, 25)
    page = request.GET.get('page')
    
    try:
        maps = paginator.page(page)
    except PageNotAnInteger:
        maps = paginator.page(1)
    except EmptyPage:
        maps = paginator.page(paginator.num_pages)
    
    context =   {'maps':maps}
                
    return render(request, 'map_list.html', context)

def graphic(request):
    return render(request, "graphic.html")