# Build environment
FROM node:18.12.0 as build

WORKDIR /opt/frontend
COPY package.json package-lock.json ./
#RUN npm install
RUN npm ci

ENV PATH="./node_modules/.bin:$PATH"

COPY . ./
RUN npm run build

# Production environment
FROM nginx:1.23.2

# Indicating that the React app is exposed at port 8081. BUT real config is in nginx.conf
EXPOSE 8081

COPY --from=build /opt/frontend/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
COPY mycert /mycert
