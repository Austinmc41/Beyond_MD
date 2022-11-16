import requests
from django.core.management.base import BaseCommand
from ...models import Quote

def get_quotes():
    url = f'https://type.fit/api/quotes'
    response = requests.get(url, headers={'Content-Type':'application/json'})
    quotes = response.json()
    return quotes
    # for quote in data:
    #     if not Quote.objects.filter(text=quote["text"], author=quote["author"]).exists():
    #         Quote.objects.create(text=quote["text"],author=quote["author"])

def seed_quotes():
  author_arg = ""

  for entry in get_quotes():
    
    print(entry)
    if entry["author"] is None:
          author_arg="None"
    else: 
      author_arg=entry["author"]
    quote = Quote(
        text=entry["text"],
        author=author_arg
    )
    quote.save()

def clear_data():
  Quote.objects.all().delete()

class Command(BaseCommand):
  def handle(self, *args, **options):
    seed_quotes()
    # clear_data()
    print("completed")