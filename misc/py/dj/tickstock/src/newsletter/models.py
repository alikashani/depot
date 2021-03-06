from __future__ import unicode_literals

from django.db import models

# Create your models here.
class SignUp(models.Model):
    email = models.EmailField()
    full_name = models.CharField(max_length = 120, blank = True, null = True)
    timestamp = models.DateTimeField(auto_now_add = True, auto_now = False)
    updated = models.DateTimeField(auto_now_add = False, auto_now = True)

    def __unicode__(self): # __str__ in Python3
        return self.email

class Search(models.Model):
    search_text = models.CharField(max_length = 120, blank = True)

    def __unicode__(self):
        return self.search_text
