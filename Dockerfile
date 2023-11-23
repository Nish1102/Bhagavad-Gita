FROM nginx:alpine
COPY img/* /usr/share/nginx/html/
COPY home.html index.html script.js styles.css /usr/share/nginx/html/
EXPOSE 80