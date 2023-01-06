ARG NODE_VER
FROM node:${NODE_VER}

USER node
WORKDIR /frontend

CMD ["/bin/bash", "-c", "cd yumemi && yarn install && yarn dev"]