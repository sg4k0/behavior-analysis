ARG NODE_VER
FROM node:${NODE_VER}

USER node
WORKDIR /home/node/app

CMD ["/bin/bash", "-c", "yarn install && yarn dev"]
