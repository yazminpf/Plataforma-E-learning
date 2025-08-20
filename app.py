import pandas as pd
import os

# Datos de ejemplo (los puedes reemplazar con los que vayas recolectando)
nueva_prueba = {
    "Usuario": "Usuario 1",
    "Tarea": "Ingresar al curso de Word",
    "Tiempo (segundos)": 25,
    "Error": "Ninguno",
    "Satisfacción (1-5)": 4
}

# Nombre del archivo Excel
archivo_excel = "pruebas_usabilidad.xlsx"

# Si el archivo ya existe, lo carga y agrega nueva fila
if os.path.exists(archivo_excel):
    df_existente = pd.read_excel(archivo_excel)
    df_actualizado = pd.concat([df_existente, pd.DataFrame([nueva_prueba])], ignore_index=True)
else:
    # Si no existe, crea uno nuevo
    df_actualizado = pd.DataFrame([nueva_prueba])

# Guardar en Excel
df_actualizado.to_excel(archivo_excel, index=False)

print(f"✅ Prueba guardada en '{archivo_excel}'")