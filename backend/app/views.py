from django.shortcuts import render
from rest_framework.views import APIView
from . models import *
from . serializer import *
from rest_framework.response import Response
import random

# View for retrieving a game
class GameView(APIView):
    def get(self, request):
        games = Game.objects.all()

        if not games.exists():
            return Response({"err": "No games found"}, status=404)

        selected_game = random.choice(games) # TODO: change to account for whether a grid has been completed before
        serializer = GameSerializer(selected_game, many=True)
        return Response(serializer.data)
    def post(self, request):
        size = request.data.get('size')
        nums_top = request.data.get('nums_top')
        nums_left = request.data.get('nums_left')
        grid = request.data.get('grid')

        game = Game(size=size, nums_top=nums_top, nums_left=nums_left, grid=grid)
        game.save()
        serializer = GameSerializer(game)
        return Response(serializer.data)

# TODO: add a view for the updates
"""
class UpdateView(APIView):
    def post(self, request):
        id = request.data.get('id')
        
        game = Game.objects.get(id=pk)
        update = Update.objects.filter(game=game)
        serializer = UpdateSerializer(update, many=True)
        return Response(serializer.data)
"""