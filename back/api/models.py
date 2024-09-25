from django.db import models


class Good(models.Model):
    name = models.CharField(max_length=255, verbose_name='Название товара')
    description = models.TextField(verbose_name='Описание товара')
    price = models.IntegerField(default=0)
