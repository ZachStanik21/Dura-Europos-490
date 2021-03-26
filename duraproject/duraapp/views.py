from django.shortcuts import render

# Create your views here.
def vue_test(request):
    return render(request, 'duraapp/vue-test.html')