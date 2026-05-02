#! bin/bash

echo "Docker is not dockering"
docker build -t est_chatbot .
docker run -p 5173:5173 est_chatbot
lsof -i :5173
