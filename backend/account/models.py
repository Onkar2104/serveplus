from django.db import models
from django.contrib.auth.models import PermissionsMixin, AbstractBaseUser, BaseUserManager
from django.conf import settings
from django.utils import timezone

# Create your models here.

class CustomUserManager(BaseUserManager):

    def _create_user(self, email, password, **extra_fields):
        if not email:
            raise ValueError("Email Required.!")

        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)

        return user
    

    def create_user(self, email=None, password=None, **extra_fields):
        extra_fields.setdefault('is_superuser', False)
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_donor', False)
        extra_fields.setdefault('is_receiver', True)
        extra_fields.setdefault('is_volunteer', False)
        return self._create_user(email, password, **extra_fields)
    
    def create_donor(self, email=None, password=None, **extra_fields):
        extra_fields.setdefault('is_superuser', False)
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_donor', True)
        extra_fields.setdefault('is_receiver', False)
        extra_fields.setdefault('is_volunteer', False)
        return self._create_user(email, password, **extra_fields)


    def create_volunteer(self, email=None, password=None, **extra_fields):
        extra_fields.setdefault("is_superuser", False)
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_donor', False)
        extra_fields.setdefault('is_receiver', False)
        extra_fields.setdefault('is_volunteer', False)
        return self._create_user(email, password, **extra_fields)

    def create_superuser(self, email=None, password=None, **extra_fields):
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_donor', False)
        extra_fields.setdefault('is_receiver', False)
        extra_fields.setdefault('is_volunteer', False)
        return self._create_user(email, password, **extra_fields)
    

class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True, blank=False, null=False)
    phone = models.CharField(max_length=12, default='')
    first_name = models.CharField(max_length=20, blank=False, default='')
    middle_name = models.CharField(max_length=20, blank=True, default='')
    last_name = models.CharField(max_length=20, blank=False, default='')
    otp = models.IntegerField(blank=True, null=True)

    is_active = models.BooleanField(default=True)
    is_superuser = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_donor = models.BooleanField(default=False)
    is_receiver = models.BooleanField(default=False)
    is_volunteer = models.BooleanField(default=False)

    date_joined = models.DateTimeField(default=timezone.now)
    last_logged = models.DateTimeField(blank=True, null=True)

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'
        

    
    
