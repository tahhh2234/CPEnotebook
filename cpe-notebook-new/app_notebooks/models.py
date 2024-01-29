from django.db import models

class Notebook(models.Model):
    title = models.CharField(max_length=255)
    code = models.CharField(max_length=20, null=True, blank=True)
    chapters = models.IntegerField()
    is_maths = models.BooleanField(default=False)
    description = models.TextField(null=True, blank=True)
    image_relative_url = models.CharField(max_length=100, null=True, blank=True)

    def __str__(self) -> str:
        return '{} {}'.format( self.code, self.title)