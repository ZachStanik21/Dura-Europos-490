from django.shortcuts import render

# Create your views here.
def vue(request):
    return render(request, 'duraapp/vue.html')