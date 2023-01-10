FROM node:12.18.1
RUN mkdir -p /app/
WORKDIR /app/

COPY . .

WORKDIR /app
RUN npm i

WORKDIR /app/client
RUN npm i
# RUN npm install worker-loader
RUN npm run-script build


RUN useradd -m myuser
USER myuser

WORKDIR /app
CMD ["npm", "start"]
