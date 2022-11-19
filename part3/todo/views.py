from django.shortcuts import render
from rest_framework import viewsets
from .serializers import TodoSerializer, QuoteSerializer
from .models import Todo, Quote
from django.views import View
from django.db.models import Max
import random
from django.http import JsonResponse
import requests

# to get all todo
class TodoView(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()


# to get all quote
class QuotesView(viewsets.ModelViewSet):
    serializer_class = QuoteSerializer
    queryset = Quote.objects.all()


# to get one quote object at random
class QuoteView(View):

    def get(self, request):
        max_id = Quote.objects.all().aggregate(max_id=Max("id"))['max_id']
        while True:
            pk = random.randint(1, max_id)
            quote = Quote.objects.filter(pk=pk).values().first()
            if quote:
                response = JsonResponse(quote)
                return response





