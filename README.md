Deploy Locally with Docker
📦 Step 1: Unzip the project
If you downloaded the ZIP:

unzip jwt-testbed-updated.zip
cd jwt-testbed
🛠️ Step 2: Build the Docker image

docker build -t jwt-testbed .
🚀 Step 3: Run the container

docker run -p 3000:3000 jwt-testbed
Your vulnerable app is now live at:

http://localhost:3000/login.html
http://localhost:3000/admin.html
