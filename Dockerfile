FROM node:latest

LABEL version="1.0.0"
LABEL description="IM-Capsule Assessment"

# set working directory
WORKDIR /app

COPY ["package.json","package-lock.json*", "yarn.lock", "./"]

RUN yarn && yarn cache clean --all

# Copy Dir
COPY . /app

# # Install Node Package
# RUN npm install --legacy-peer-deps


EXPOSE 3000

# Cmd script
CMD ["yarn", "run", "start"]
