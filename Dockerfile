# Build environment
FROM node:16.17.1 as build

WORKDIR /opt/frontend
COPY package.json package-lock.json ./
#RUN npm install
RUN npm ci

ENV PATH="./node_modules/.bin:$PATH"

COPY . ./
RUN npm run build


# Production environment
FROM nginx:1.23.1

COPY --from=build /opt/frontend/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
#COPY server_vap_backend.crt server_vap_backend.key /var/tmp/vap-certs/
