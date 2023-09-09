# Aplicacion-Flask-Validaciones
Este repositorio contiene un proyecto de ejemplo que demuestra cómo realizar validaciones de formulario en una aplicación web utilizando el framework Flask en el lado del servidor y jQuery en el lado del cliente.

## Descripción

La aplicación web permite a los usuarios completar un formulario con varios campos y, mediante validaciones tanto en el lado del cliente como en el lado del servidor, garantiza que los datos ingresados sean válidos antes de ser procesados. El proyecto demuestra una forma común de implementar validaciones de formularios en aplicaciones web.

## Estructura del Proyecto

El proyecto se organiza de la siguiente manera:

- **Aplicacion Flask - Validaciones**: Este directorio contiene el código desarrollado en Flask. Aquí se definen las rutas, las validaciones del lado del servidor y la lógica de procesamiento del formulario.

- **static**: En este directorio se encuentran los archivos estáticos, incluyendo los archivos JavaScript de jQuery y los archivos CSS para el estilo de la aplicación.

- **templates**: Aquí se ubican las plantillas HTML utilizadas para renderizar las páginas web. Incluye el formulario y las páginas de resultados.

## Configuración

A continuación, se detallan los pasos para configurar y ejecutar la aplicación:

1. Asegúrate de tener Python y pip instalados en tu sistema.

2. Crea un entorno virtual para el proyecto y actívalo:
```python
  python -m venv venv
  source venv/bin/activate # En sistemas Unix/Linux
  venv\Scripts\activate # En sistemas Windows
```

3. Instala las dependencias del proyecto:
```python
  pip install -r requirements.txt
```

4. Ejecuta la aplicación Flask:
```python
  python app.py
```


La aplicación estará disponible en `http://localhost:5000/`.

## Uso

1. Abre tu navegador y accede a `http://localhost:5000/`.

2. Completa el formulario y observa las validaciones en tiempo real realizadas por jQuery en el lado del cliente.

3. Envía el formulario y verifica las validaciones adicionales realizadas por Flask en el lado del servidor.

## Contribuir

Si deseas contribuir a este proyecto, sigue los pasos:

1. Haz un fork del repositorio.

2. Crea una nueva rama para tu contribución: `git checkout -b tu-caracteristica`.

3. Realiza tus cambios y asegúrate de que las pruebas sean exitosas.

4. Envía una solicitud de extracción (Pull Request) con una descripción detallada de tus cambios.

## Licencia

Este proyecto está bajo la licencia [Licencia MIT](LICENSE).


