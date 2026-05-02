#! bin/bash
cd frontend  || cd .
echo "Docker is not dockering"
docker build -t est-chatbot .
docker run -p 5173:5173 est-chatbot