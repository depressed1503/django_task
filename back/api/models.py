from django.db import models
from django.core.validators import MinValueValidator


class Good(models.Model):
    name = models.CharField(max_length=255, verbose_name='Название товара', blank=True, null=True)
    description = models.TextField(verbose_name='Описание товара', blank=True, null=True)
    price = models.IntegerField(default=0, blank=False, null=False, validators=[MinValueValidator(0)])
