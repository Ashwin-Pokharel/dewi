from django.contrib import admin
from .models import Classes, Courses , Documents

# Register your models here.

admin.site.register(Classes)
admin.site.register(Courses)
admin.site.register(Documents)
