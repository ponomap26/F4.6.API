from django.db import models


# Create your models here.

class Tag(models.Model):
    name = models.CharField(max_length=256, blank=True)

    def __str__(self):
        return f'{self.name}'


class Receipts(models.Model):
    title = models.CharField(max_length=100, blank=True)
    body = models.TextField(blank=True)
    ingredient = models.TextField(blank=True)
    tags = models.ManyToManyField(Tag)
    image = models.ImageField(upload_to='images/', default=None)

    class Meta:
        ordering = ['title', 'body', 'ingredient', 'image']

    def __str__(self):
        return f'{self.title}'
