# Containerize the App

The first step to deploying any app to platforms like Kubernetes and Openshift is to containerize the app.
We use Docker for building and pushing container images here but you could also use Podman, Buildah, etc.

The most important difference between writing a Dockerfile for vanilla K8s vs Openshift is the additional security features in Openshift.
Openshift runs the containers as a random user that belongs to the `root` group.
This random user id is chosen from a range. Each project/namespace has its own range of uids.
This provides some security in the worst case of a malicious program breaking out of the sandbox of a container.

https://cloud.redhat.com/blog/a-guide-to-openshift-and-uids

For this reason it's very important to make all files and folders that will be used by your app be owned by the `root` group.
Also we need to set the permissions so that it's readable, writeable and executable (as necessary) by users of the `root` group.

## Steps

Build the image using the Dockerfile and push it to a container registry like Docker Hub or Quay.
```
$ docker build -t quay.io/my-username/my-web-app:v1 .
$ docker push quay.io/my-username/my-web-app:v1
```
