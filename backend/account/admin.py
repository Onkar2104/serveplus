from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from account.forms import UserAdminCreationForm, UserAdminChangeForm
from account.models import User


# Register your models here.

class UserAdmin(BaseUserAdmin):
    search_fields = ['first_name', 'middle_name', 'last_name', 'email', 'phone']
    form = UserAdminChangeForm
    add_form = UserAdminCreationForm


    list_display = ['email', 'phone', 'first_name', 'last_name']
    fieldsets = (
        ('Personal Info', {'fields': ('first_name', 'middle_name', 'last_name', 'email', 'phone', 'password')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'is_donor', ' is_volunteer', 'is_receiver')}),
        ('Dates', {'fields': ('date_joined', 'last_logged')}),
    )

    add_fieldsets = (
        (None, {
            'classes': ('wide', ),
            'fields': ('first_name', 'middle_name', 'last_name', 'email', 'phone', 'password', 'password_2', 'is_active', 'is_staff', 'is_superuser', 'is_donor', 'is_volunteer', 'is_receiver')
        }),
    )

    ordering = ['email']


admin.site.register(User, UserAdmin)