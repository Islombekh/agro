# Generated by Django 4.2.1 on 2023-05-29 12:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('agroapp', '0005_rename_title_post_nami_rename_body_post_qisqacha_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='post',
            name='rasmi',
        ),
    ]
