FROM nginx
COPY public /usr/share/nginx/html
VOLUME /usr/share/nginx/html
EXPOSE 80
