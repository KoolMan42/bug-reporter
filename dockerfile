FROM  node:15-alpine3.11


RUN apk update

WORKDIR /app


COPY package*.json .
COPY tsconfig.json ./

# Install all Packages
RUN npm install

RUN npm build
# Copy all other source code to work directory
COPY src /app/src
# TypeScript
RUN npm run tsc
# Start
CMD [ "npm", "start" ]
EXPOSE 7001