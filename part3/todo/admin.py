from django.contrib import admin
from .models import Todo, Quote

class TodoAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'completed')

class QuoteAdmin(admin.ModelAdmin):
    list_display = ('text', 'author')

admin.site.register(Todo, TodoAdmin)
admin.site.register(Quote, QuoteAdmin)