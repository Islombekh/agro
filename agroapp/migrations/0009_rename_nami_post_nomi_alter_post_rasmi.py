# Generated by Django 4.2.1 on 2023-05-29 13:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('agroapp', '0008_alter_post_rasmi'),
    ]

    operations = [
        migrations.RenameField(
            model_name='post',
            old_name='nami',
            new_name='nomi',
        ),
        migrations.AlterField(
            model_name='post',
            name='rasmi',
            field=models.ImageField(default='', upload_to='image'),
        ),
    ]
