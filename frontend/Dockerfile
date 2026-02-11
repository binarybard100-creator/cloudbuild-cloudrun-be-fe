# ---------- Stage 1: Build Vite React App ----------
FROM node:20 AS build

WORKDIR /app

COPY package.json .
# If you have package-lock.json, copy it. If not, ignore.
# COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build


# ---------- Stage 2: NGINX ----------
FROM nginx:1.25

# Copy built assets → nginx html dir
COPY --from=build /app/dist /usr/share/nginx/html

# Custom nginx config
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]