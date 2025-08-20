import pandas as pd

# Definir estructura de las pruebas de usabilidad
datos = {
    "ID Prueba": [],
    "Usuario": [],
    "Tarea": [],
    "Tiempo (segundos)": [],
    "Errores": [],
    "Satisfacción (1-5)": [],
    "Observaciones": []
}

# Crear DataFrame
df = pd.DataFrame(datos)

# Guardar en Excel
df.to_excel("pruebas_usabilidad.xlsx", index=False)

print("✅ Archivo 'pruebas_usabilidad.xlsx' creado con éxito")
