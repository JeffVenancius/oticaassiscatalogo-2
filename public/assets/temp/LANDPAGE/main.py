from PIL import Image
import os

for i in os.listdir():
    if i.endswith(".jpg"):
        Image.open(i).resize((648,648)).save(i)
