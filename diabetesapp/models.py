
# Create your models here.
from django.db import models



class Map(models.Model):
    State = models.CharField(max_length=100)
    Year = models.CharField(max_length=50)
    Prevalence = models.CharField(max_length=50)
    Eye = models.CharField(max_length=50)
    Blood = models.CharField(max_length=50)
    Foot = models.CharField(max_length=50)
    A1C = models.CharField(max_length=50)
    Management = models.CharField(max_length=200)
    Influenza = models.CharField(max_length=500)
    Pne = models.CharField(max_length=500)
    

    class Meta(object):
        verbose_name_plural = "Maps"
        ordering =('State','Year')
    
    def __unicode__(self):
        return U'%s %s' %(self.State, self.Year)
    
    def save(self, *args, **kwargs):
        self.State = self.name.upper()
        super(Maps, self).save(*args, **kwargs)
        
        