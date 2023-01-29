FROM nginx

COPY assets /usr/share/nginx/html/assets
COPY build /usr/share/nginx/html/build
COPY index.html /usr/share/nginx/html
COPY src/data /usr/share/nginx/html/src/data
COPY lib /usr/share/nginx/html/lib
COPY node_modules/bootstrap/dist/js/bootstrap.min.js /usr/share/nginx/html/node_modules/bootstrap/dist/js
COPY node_modules/ace-builds/src-noconflict /usr/share/nginx/html/node_modules/ace-builds/src-noconflict
