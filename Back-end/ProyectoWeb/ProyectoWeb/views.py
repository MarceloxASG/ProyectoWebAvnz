from django.shortcuts import render
from django.contrib.auth.decorators import login_required, user_passes_test 

@user_passes_test(lambda u: u.is_superuser)
@login_required
def home(request):
    return render(request, 'home.html')
