FROM node:20-bookworm

WORKDIR /workspace/next

COPY . . 

RUN npm install

RUN npm run obfuscate  

EXPOSE 1223

CMD ["npm", "run", "prod:concurrent"]