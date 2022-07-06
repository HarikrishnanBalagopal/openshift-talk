# Updating the App

## Image Streams

https://docs.openshift.com/container-platform/4.10/rest_api/image_apis/imagestream-image-openshift-io-v1.html#imagestream-image-openshift-io-v1

https://access.redhat.com/documentation/en-us/openshift_container_platform/4.1/html/images/managing-images

https://docs.openshift.com/container-platform/4.10/openshift_images/using-imagestreams-with-kube-resources.html

An ImageStream is a reference to other images. These images can be hosted on public or private registries. Those images can also be present
in the cluster internal registry. Deployments and DeploymentConfigs can use ImageStreams by using the name of the ImageStream and one of its tags
in the container image field.

Image streams, being OpenShift Container Platform native resources, work out of the box with all the rest of native resources available in OpenShift Container Platform, such as builds or deployments. It is also possible to make them work with native Kubernetes resources, such as jobs, replication controllers, replica sets or Kubernetes deployments.

When using image streams with Kubernetes resources, you can only reference image streams that reside in the same project as the resource. The image stream reference must consist of a single segment value, for example ruby:2.5, where ruby is the name of an image stream that has a tag named 2.5 and resides in the same project as the resource making the reference.

https://docs.openshift.com/container-platform/4.10/rest_api/image_apis/imagestream-image-openshift-io-v1.html#spec-lookuppolicy

## Steps

Add the ImageStream yaml to the list of objects in our `template.yaml` file.
Then regenerate the yamls with

```
$ oc process -f template.yaml --param-file=secrets/parameters.env -o yaml > generated.yaml
```

and then deploy the generated yamls with
```
$ kubectl apply -f generated.yaml
```

In this ImageStream we have specified only one image tag called `production`. This can be referred to from a DeploymentConfig using `image: my-web-app:production`.
Since we want this tag to refer to an image in a public registry we use `kind: DockerImage` in the `from` field with the full URL of the image in the `name` field.
Here we have specified `scheduled: true` as the `importPolicy` because we want the ImageStream to check the external image periodically and pull the new image if there are any changes.

```yaml
  apiVersion: image.openshift.io/v1
  kind: ImageStream
  metadata:
    name: my-web-app
  spec:
    lookupPolicy:
      local: true
    tags:
    - from:
        kind: DockerImage
        name: public.ecr.aws/r4q1n2d3/my-web-app:latest
      importPolicy:
        scheduled: true
      name: production
      referencePolicy:
        type: Source
```

and in the DeploymentConfig we refer to the ImageStream name and tag. We also set it to redeploy the pods with the new image if there is an image change.

```yaml
    template:
      metadata:
        labels:
          app: my-web-app
      spec:
        containers:
        - image: my-web-app:production
          imagePullPolicy: Always
          name: frontend
          ports:
          - containerPort: 8080
    triggers:
    - imageChangeParams:
        automatic: true
        containerNames:
        - frontend
        from:
          kind: ImageStreamTag
          name: my-web-app:production
      type: ImageChange
```
