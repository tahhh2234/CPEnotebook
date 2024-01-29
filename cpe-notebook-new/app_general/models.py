from django.db import models

class Library(models.Model):
    STATUS = [
        ('unapproved','Unapproved'),
        ('approved', 'Approved'),
        ('banned', 'Banned')
    ]

    name = models.CharField(max_length=128)
    email = models.EmailField(max_length=128, unique=True)
    status = models.CharField(max_length=128, choices=STATUS, default='unapproved')
    notebook_set = models.ManyToManyField('app_notebooks.Notebook')

    def __str__(self) -> str:
        return '{} (id={})'.format(self.name, self.id)  