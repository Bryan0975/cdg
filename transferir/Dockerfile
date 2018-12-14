FROM zzswang/docker-nginx-react:latest

COPY ./nginx.conf /etc/nginx/nginx.conf

ENV DEBUG=off

## Suppose your app is in the dist directory.
COPY ./build /app