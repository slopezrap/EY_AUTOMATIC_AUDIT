# Generated by Django 2.1.8 on 2020-10-04 13:10

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('APP_INICIO', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='plantillaffpprellena_model',
            name='plantilla_xlsx',
            field=models.FileField(default=django.utils.timezone.now, max_length=2000, upload_to='C:\\Users\\slope\\OneDrive\\Escritorio\\EY\\EY_ANGULAR-ELECTRON-DJANGO\\PROYECTO_WEB\\BACK\\WS_DJANGO\\MEDIA\\APP_INICIO/EXTERNAL_AUDIT/FFPP'),
            preserve_default=False,
        ),
    ]