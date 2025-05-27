# React Portfolio – Cloud-Native Deployment

This project is a customized version of a React-based portfolio website. Building upon the original design, I've integrated containerization using Docker, orchestrated deployment with Kubernetes manifests, automated CI with GitHub Actions, and implemented GitOps-based CD using ArgoCD.

## 🚀 Features

- **Docker Integration**: Containerized the React application for consistent and portable deployments.
- **Kubernetes Manifests**: Defined deployment configurations to manage application scaling and availability.
- **GitHub Actions Workflow**: Automated the build and push of Docker images to a container registry.
- **ArgoCD Integration**: Enabled continuous deployment to Kubernetes using a GitOps approach.

## 📦 Docker Setup

### Build the Docker Image

```bash
docker build -t react-portfolio .
```

### Run the Container

```bash
docker run -p 3000:80 react-portfolio
```

The application will be accessible at `http://localhost:3000`.

## ☸️ Kubernetes Deployment

The `k8s/` directory contains the necessary manifests:

- `deployment.yaml`: Defines the Deployment for the React application.
- `service.yaml`: Exposes the Deployment via a ClusterIP Service.
- `ingress.yaml`: Configures Ingress rules for external access (optional).

### Apply Manifests

```bash
kubectl apply -f k8s/
```

Ensure your Kubernetes cluster is running and configured correctly before applying the manifests.

## ⚙️ CI/CD Pipeline

### GitHub Actions

The `.github/workflows/deploy.yml` file defines the CI pipeline:

- **Build**: Compiles the React application.
- **Dockerize**: Builds and tags the Docker image.
- **Push**: Uploads the image to Docker Hub or another registry.

### ArgoCD

ArgoCD watches the Git repository for changes and automatically syncs Kubernetes manifests to the cluster, enabling continuous deployment.

## 🛠️ Prerequisites

- **Docker**: For building and running containers.
- **Kubernetes Cluster**: Local (e.g., Minikube) or cloud-based.
- **kubectl**: Command-line tool for interacting with the cluster.
- **GitHub Secrets**: Store sensitive information like Docker registry credentials.
- **ArgoCD**: Installed and configured to watch the repository.

## 📁 Project Structure

```plaintext
├── Dockerfile
├── k8s/
│   ├── deployment.yaml
│   ├── service.yaml
│   └── ingress.yaml
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
├── src/
├── package.json
└── README.md
```
