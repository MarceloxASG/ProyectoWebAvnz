# Generated by Django 5.0.6 on 2024-06-14 07:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0003_alter_user_id_alter_user_is_employee'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='is_employee',
            field=models.BooleanField(default=False, verbose_name='Is employee'),
        ),
    ]
