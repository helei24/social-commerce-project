from django.db import models


class Tag(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    image_path = models.URLField()
    tags = models.ManyToManyField(Tag)

    def __str__(self):
        return self.name
