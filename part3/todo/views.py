from django.shortcuts import render
from rest_framework import viewsets
from .serializers import TodoSerializer, QuoteSerializer
from .models import Todo, Quote
import requests

# Create your views here.
class TodoView(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()

class QuoteView(viewsets.ModelViewSet):
    serializer_class = QuoteSerializer
    queryset = Quote.objects.all()
# def quote():
#     url = f'https://type.fit/api/quotes'
#     response = requests.get(url)
#     data = response.json()
#     # for quote in data:
#     #     if not Quote.objects.filter(text=quote["text"], author=quote["author"]).exists():
#     #         Quote.objects.create(text=quote["text"],author=quote["author"])
