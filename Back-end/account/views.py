import json
from django.http import JsonResponse
from django.contrib.auth import authenticate, login, logout
from django.views.decorators.csrf import csrf_exempt
from .forms import SignUpForm, LoginForm
from .models import User

@csrf_exempt
def index(request):
    return JsonResponse({"message": "Welcome to the index page"})


def parse_request_data(request):
    if request.content_type == 'application/json':
        try:
            data = json.loads(request.body)
        except json.JSONDecodeError:
            return None, JsonResponse({"error": "Invalid JSON data"})
    else:
        data = request.POST
    return data, None

#--------------------------------------RGISTRO DE USUARIO--------------------------------------#

@csrf_exempt
def register(request):
    if request.method == 'POST':
        data, error_response = parse_request_data(request)
        if error_response:
            return error_response

        form = SignUpForm(data)
        if form.is_valid():
            form.save()
            return JsonResponse({"message": "Registration successful"})
        else:
            return JsonResponse({"error": form.errors})
    else:
        return JsonResponse({"error": "Only POST requests"})

#-------------------------------REFACTORIZACION DEL LOGIN_VIEW-------------------------------#

def validate_login_form(data):
    form = LoginForm(data)
    if form.is_valid():
        return form.cleaned_data, None
    else:
        return None, JsonResponse({"error": form.errors})

def authenticate_user(username, password):
    user = authenticate(username=username, password=password)
    if user is not None:
        return user, None
    else:
        return None, JsonResponse({"error": "Invalid credentials"})

def generate_login_response(user):
    if user.is_admin:
        return JsonResponse({"message": "Admin login successful", "token": "dummy_admin_token"})  # Devuelve un token dummy
    elif user.is_employee:
        return JsonResponse({"message": "Employee login successful", "token": "dummy_employee_token"})  # Devuelve un token dummy
    else:
        return JsonResponse({"error": "User does not have the necessary permissions"})
    
@csrf_exempt
def login_view(request):
    if request.method == 'POST':
        data, error_response = parse_request_data(request)
        if error_response:
            return error_response

        cleaned_data, error_response = validate_login_form(data)
        if error_response:
            return error_response

        username = cleaned_data.get('username')
        password = cleaned_data.get('password')

        user, error_response = authenticate_user(username, password)
        if error_response:
            return error_response

        login(request, user)
        return generate_login_response(user)
    else:
        return JsonResponse({"error": "Only POST requests allowed"})
    
#----------------------------------LOGOUT DEL ADMIN Y EMPLEADO----------------------------------#
    
@csrf_exempt
def logout_view(request):
    if request.method == 'POST':
        logout(request)
        return JsonResponse({"message": "Logout successful"})
    return JsonResponse({"error": "Only POST requests allowed"})

#-------------------------------AUTENTICACION DEL ADMIN / EMPLEADO-------------------------------#
    
@csrf_exempt
def admin(request):
    if request.user.is_authenticated and request.user.is_admin:
        return JsonResponse({"message": "Welcome to the admin page"})
    else:
        return JsonResponse({"error": "Unauthorized access"})

@csrf_exempt
def employee(request):
    if request.user.is_authenticated and request.user.is_employee:
        return JsonResponse({"message": "Welcome to the employee page"})
    else:
        return JsonResponse({"error": "Unauthorized access"})
