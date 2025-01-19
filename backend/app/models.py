from django.db import models

class Game(models.Model):
    id = models.IntegerField(primary_key=True)
    size = models.IntegerField(default=5)
    nums_top = models.JSONField()
    nums_left = models.JSONField()
    grid = models.JSONField()

# TODO: add a model to handle grid updates in backend
"""
class Update(models.Model):
    game = models.ForeignKey(Game, on_delete=models.CASCADE)
    row = models.IntegerField()
    col = models.IntegerField()
    filled = models.BooleanField()
"""