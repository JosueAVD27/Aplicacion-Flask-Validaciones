#Importamos las librerias de flask
from flask import Flask, redirect, render_template, request, url_for
#Intanciar la aplicacion
app = Flask(__name__)

#Decorador para definir la ruta inicio
@app.route('/')
#Crea la funcion para llamar a la pagina de inicio
def index():
    return render_template('index.html')

#main del programa
if __name__ == '__main__':
    app.run(debug=True)     #debug para reiniciar el servidor