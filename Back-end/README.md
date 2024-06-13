# Guía de Configuración del Backend

- Este repositorio contiene el código del backend de mi proyecto. A continuación, se detallan los pasos necesarios para configurar el entorno y ejecutar el servidor.

## Configuración del Entorno

1. **Instalación de Django:**
   Antes de comenzar, asegúrate de tener Django instalado en tu sistema. Puedes instalarlo utilizando pip:

    ```
    pip install django
    ```

2. **Creación del Entorno Virtual:**
    Para mantener las dependencias del proyecto aisladas, se recomienda crear un entorno virtual. Puedes hacerlo utilizando `virtualenv` o `venv`. Por ejemplo, con `venv`:

    ```
    python -m venv myenv*
    ```

Luego, activa el entorno virtual:

- En Windows:

  ```
  myenv\Scripts\activate
  ```

- En macOS y Linux:

  ```
  source myenv/bin/activate
  ```

## Ejecución del Servidor

  - Una vez que el entorno esté configurado, puedes iniciar el servidor Django. Asegúrate de estar en la carpeta raíz del proyecto (donde se encuentra `manage.py`) y ejecuta el siguiente comando:

    ```
    python manage.py runserver
    ```

Esto iniciará el servidor de desarrollo y podrás acceder a la aplicación en `http://127.0.0.1:8000/`.

¡Listo! Ahora estás listo para comenzar a desarrollar en el backend de este proyecto.
