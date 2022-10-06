ARG NODE_VER
FROM node:${NODE_VER}

WORKDIR /home/node/app
RUN mkdir /home/node/app/node_modules
RUN chown -R node:node /home/node/app
USER node

CMD ["/bin/bash", "-c", "yarn install && yarn dev"]
