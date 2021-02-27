from django.db import models
import string
import random

def generate_unique_code():
    length = 8

    while True:
        code = "".join(random.choices(string.ascii_letters, k = length))
        if Room.objects.filter(code = code).count() == 0:
            break
    return code

class Room(models.Model):
    code = models.CharField(unique = True, max_length = 8, default = generate_unique_code)
    host = models.CharField(unique = True, max_length = 50)
    votes_to_skip = models.IntegerField(null = False, default = 1)
    guest_can_pause = models.BooleanField(null = False, default = False)
    created_at = models.DateTimeField(auto_now_add = True)