ARG NODE_VER
FROM node:${NODE_VER}

USER node
WORKDIR /home/node/app
RUN mkdir /home/node/app/node_modules

CMD ["/bin/bash", "-c", "yarn install && yarn dev"]
