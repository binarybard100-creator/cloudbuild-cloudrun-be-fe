FROM node:20 as build

WORKDIR /app
COPY package.json .
# COPY package-lock.json .
RUN npm install

COPY . .
RUN npm run build

FROM nginx:1.25
COPY --from=build /app/dist /usr/share/nginx/html

# NGINX listens on 8080 by default on Cloud Run
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]