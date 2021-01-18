FROM nginx:alpine

# RUN rm /etc/nginx/conf.d/default.conf
RUN mkdir /src
COPY index.html /src/index.html
COPY nginx.conf /etc/nginx/conf.d
ADD /tiles/ /src/assets/tiles/

EXPOSE 1235

CMD ["nginx", "-g", "daemon off;"]