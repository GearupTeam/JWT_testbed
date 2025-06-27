**local Docker deployment instructions**
@0x9byte :)!
---

## 🚀 Local Deployment (Docker)

You can quickly run the vulnerable JWT testbed locally using Docker.

### 📦 Step 1: Unzip and Enter the Project

```bash
unzip jwt-testbed-updated.zip
cd jwt-testbed
```

---

### 🛠️ Step 2: Build the Docker Image

```bash
docker build -t jwt-testbed .
```

---

### 🚀 Step 3: Run the Docker Container

```bash
docker run -p 3000:3000 jwt-testbed
```

---

### 🌐 Access the App in Your Browser

* 🔑 Login Page: [http://localhost:3000/login.html](http://localhost:3000/login.html)
* 🛠️ Admin Panel: [http://localhost:3000/admin.html](http://localhost:3000/admin.html)

---

### 📌 Default Users

| Username | Password    | Role  |
| -------- | ----------- | ----- |
| `admin`  | `adminpass` | admin |
| `user1`  | `userpass`  | user  |

---

Let me know if you also want:

* A `docker-compose.yml` version
* A GitHub Actions workflow to deploy it
* A GitHub Pages badge or preview setup
