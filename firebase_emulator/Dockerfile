ARG NODE_VER
ARG OPEN_JDK_VER
FROM node:${NODE_VER} as node
FROM openjdk:${OPEN_JDK_VER}
ARG FIREBASE_VER

RUN set -ex \
  && apt-get update \
  && apt-get install -y curl

COPY --from=node /usr/local/bin/node /usr/local/bin/
COPY --from=node /opt/yarn* /opt/yarn/
RUN ln -s /opt/yarn/bin/yarn /usr/local/bin/yarn \
 && ln -s /opt/yarn/bin/yarnpkg /usr/local/bin/yarnpkg

RUN yarn global add firebase-tools@${FIREBASE_VER}

COPY firebase.json firebase.json
COPY data /opt/workspace/data

# Emulator Suite UI
EXPOSE 4000
# Auth
EXPOSE 9099

CMD ["/bin/bash", "-c", "firebase emulators:start --project test --import=./data"]