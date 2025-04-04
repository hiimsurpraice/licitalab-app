# Usar una imagen oficial de Node.js
FROM node:18

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar el archivo package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Construir la aplicación para producción
RUN npm run build

# Exponer el puerto en el que se ejecutará la aplicación
EXPOSE 5173

# Iniciar la aplicación en el puerto 5173
CMD ["npm", "run", "dev"]