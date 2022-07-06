FROM node:18
WORKDIR /app
COPY package.json .
RUN mkdir /.node && chgrp -R root /.node && chmod 775 /.node && corepack enable && pnpm install
COPY index.js .
COPY public public
EXPOSE 8080
CMD ["pnpm", "start"]
