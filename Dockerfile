FROM node:14

WORKDIR /app
COPY . .

# Expose port 3000 if user of image decides to use -P option of `docker run` which will be mapped to a random host 
EXPOSE 3000

# Install npm dependencies
RUN npm install

CMD ["npm", "start"]