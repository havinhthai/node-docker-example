FROM mhart/alpine-node:latest

WORKDIR /src/app

COPY ./MyWeb/package.json /src/app/

RUN yarn \
&& mkdir /src/logs

COPY ./MyMeb/ /src/app/

EXPOSE 3000

ENTRYPOINT ["./entry.sh"]

