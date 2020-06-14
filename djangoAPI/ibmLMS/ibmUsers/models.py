from django.contrib.auth.models import AbstractBaseUser
from django.db import models
from phonenumber_field.modelfields import PhoneNumberField
from django.contrib.auth.models import PermissionsMixin
from django.utils import timezone
from ibmUsers.manager import UserManager
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token


class User(AbstractBaseUser , PermissionsMixin):
    email = models.EmailField(unique=True, null=False, help_text='Email Address' , blank=False)
    first_name = models.CharField(max_length=50, null=False, help_text='First Name' , blank=False)
    last_name = models.CharField(max_length=50, null=False, help_text='Last Name' , blank=False)
    phone_number = PhoneNumberField(blank=False, null=False, help_text='Phone Number')
    is_teacher = models.BooleanField(default=False, null=False)
    is_school_admin = models.BooleanField(default=False, null=True)
    date_joined = models.DateTimeField(default=timezone.now)
    last_active = models.DateTimeField(default=timezone.now)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False , null=False)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name', 'phone_number', 'is_teacher']

    class Meta:
        app_label = 'ibmUsers'
        verbose_name = 'user'
        verbose_name_plural = 'users'

    def get_email(self):
        return self.email

    def get_first_name(self):
        return self.first_name

    def get_last_name(self):
        return self.last_name

    def get_phone_number(self):
        return self.phone_number

    def get_full_name(self):
        return "{0} {1}".format(self.first_name, self.last_name)

    def get_short_name(self):
        return self.first_name

    def get_last_active(self):
        return self.last_active


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)