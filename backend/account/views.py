from django.shortcuts import render

# Create your views here.
from django.contrib import messages
import random
from urllib import request
from django.conf import settings
from django.shortcuts import redirect, render
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError
from django.core.mail import send_mail
from django.contrib.auth import get_user_model
from django.views import View

# Create your views here.

User = get_user_model()

class Register(View):
    def get(self, request):
        return render(request, "register.html", {"step": "register"})
    
    def post(self, request):
        if 'send_otp' in request.POST:
            return self.email_verification(request)
        elif 'verify_otp' in request.POST:
            return self.verify_otp(request)
        
        return render(request, "register.html", {"step": "register"})

    def email_verification(self, request):
        first_name = request.POST.get('first_name')
        middle_name = request.POST.get('middle_name')
        last_name = request.POST.get('last_name')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        password = request.POST.get('password')
        confirm_password = request.POST.get('confirm_password')

        # Validation
        if not email:
            messages.error(request, "Email is required.")
            return redirect('/register/')
        
        if password != confirm_password:
            messages.error(request, "Passwords do not match.")
            return redirect('/register/')
        
        if User.objects.filter(email=email).exists():
            messages.error(request, "Email is already in use.")
            return redirect('/register/')
        
        try:
            validate_password(password)
        except ValidationError as e:
            messages.error(request, " ".join(e.messages))
            return redirect('/register/')
        
        # Generate OTP and store in session
        send_otp = random.randint(1000, 9999)
        request.session['otp'] = send_otp
        request.session['register_data'] = {
            'first_name': first_name,
            'middle_name': middle_name,
            'last_name': last_name,
            'email': email,
            'phone': phone,
            'password': password,
        }

        # Send email with OTP
        subject = "Email Verification code for Serve+"
        message = f"Dear {first_name}, \n\nYour Verification code for ServePlus is {send_otp}\n\nThank You!\nTeam ServePlus."
        from_mail = settings.EMAIL_HOST_USER
        recipient_email = [email]

        try:
            send_mail(subject, message, from_mail, recipient_email)
            messages.success(request, "Verification mail has been sent to your email ID.")
        except Exception as e:
            messages.error(request, f"Failed to send OTP {e}")
            return redirect('/register/')
        
        return render(request, "register.html", {"step": "verify_otp"})

    def verify_otp(self, request):
        otp_input = request.POST.get('otp')
        stored_otp = request.session.get('otp')
        register_data = request.session.get('register_data')

        if not register_data or not stored_otp:
            messages.error(request, "Session expired. Please try again.")
            return redirect('/register/')

        if str(stored_otp) == str(otp_input):
            # Create user
            user = User.objects.create_user(
                first_name=register_data['first_name'],
                middle_name=register_data['middle_name'],
                last_name=register_data['last_name'],
                email=register_data['email'],
                phone=register_data['phone'],
                password=register_data['password']
            )

            # Clear session data
            del request.session['otp']
            del request.session['register_data']

            messages.success(request, "Registration successful. Please login to continue.")

            # Send Welcome email
            subject = "Welcome to ServePlus"
            message = f"Hello {register_data['first_name']},\nWelcome to ServePlus - a system to reduce food wastage. We are glad to have you on ServePlus.\n\nWarm Regards,\nServe+ Team."
            from_mail = settings.EMAIL_HOST_USER
            recipient_list = [register_data['email']]

            try:
                send_mail(subject, message, from_mail, recipient_list)
            except Exception as e:
                messages.success(request, "Account created successfully, but email failed to send.")

            return redirect('/login/')
        else:
            messages.error(request, "Invalid OTP, Please try again.")
            return render(request, "register.html", {"step": "verify_otp"})

    