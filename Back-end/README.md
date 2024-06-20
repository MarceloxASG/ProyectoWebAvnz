# Guía de Configuración del Backend

- Este repositorio contiene el código del backend de mi proyecto. A continuación, se detallan los pasos necesarios para configurar el entorno y ejecutar el servidor.

## Configuración del Entorno

1. **Creación del Entorno Virtual:**
   Para mantener las dependencias del proyecto aisladas, se recomienda crear un entorno virtual. Puedes hacerlo utilizando `virtualenv` o `venv`. Por ejemplo, con `venv`:

    ```
    python -m venv myvenv
    ```

Luego, activa el entorno virtual:

- En Windows:

  ```
  myvenv\Scripts\activate
  ```

- En macOS y Linux:

  ```
  source myvenv/bin/activate
  ```

2. **Instalación de Django:**
    Una vez activado, asegúrate de tener Django instalado en tu sistema. Puedes instalarlo utilizando pip:

    ```
    pip install django
    ```

3. **Instalacion de las dependencias requeridas:**
    Después de haber instalado django, se debe instalar las siguientes dependecias:

    ```
    pip install appdirs asgiref bcrypt certifi cffi chardet cryptography defusedxml distlib Django django-allauth django-cors-headers django-extensions django-widget-tweaks djangorestframework filelock idna mysql-connector-python mysqlclient oauthlib Pillow pycparser PyJWT python3-openid pytz requests requests-oauthlib six sqlparse stripe urllib3 virtualenv virtualenvwrapper-win

    ```

## Ejecución del Servidor

  - Una vez que el entorno esté configurado, y las dependencias necesarias instaladas, puedes iniciar el servidor Django. Asegúrate de estar en la carpeta raíz del proyecto (donde se encuentra `manage.py`) y ejecuta el siguiente comando:

    ```
    python manage.py runserver
    ```

Esto iniciará el servidor de desarrollo y podrás acceder a la aplicación en `http://127.0.0.1:8000/`.

¡Listo! Ahora estás listo para comenzar a desarrollar en el backend de este proyecto.
