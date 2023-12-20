FROM node:latest
ENV REACT_APP_DOMAIN=http://localhost:8080/WeatherForecastnp
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]