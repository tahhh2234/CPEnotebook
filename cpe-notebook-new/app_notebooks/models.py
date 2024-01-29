from django.db import models

class Notebook(models.Model):
    title = models.CharField(max_length=255)
    chapters = models.IntegerField()
    is_maths = models.BooleanField(default=False)
    description = models.TextField(null=True, blank=True)

    def __str__(self) -> str:
        return '{} (id={})'.format(self.title, self.id)