from django.db import models

class ImageUploadForm(forms.Form):
    """Image upload form."""
    image = forms.ImageField()

class ExampleModel(models.Model):
    model_pic = models.ImageField(upload_to = 'pic_folder/', default = 'pic_folder/None/no-img.jpg')