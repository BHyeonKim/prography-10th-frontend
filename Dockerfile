FROM node AS build

WORKDIR /app

COPY . /app

RUN yarn install

RUN yarn run build

FROM nginx

COPY --from=build /app/dist /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]