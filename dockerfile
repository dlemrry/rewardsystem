FROM node:18-alpine

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build
CMD ["node", "-r", "tsconfig-paths/register", "dist/apps/auth/main.js"]