# Using Move2Kube to generate Openshift yamls

Move2Kube https://move2kube.konveyor.io/ is a CLI tool (there is also a UI version)
that was built to migrate applications from legacy platform to Kubernetes.
Due to client requirements, Move2Kube's architecture was made flexible enough to allow arbitrary transformations.
We can use Move2Kube to generate the Openshift specific yamls and template files automatically from the source code.

```
$ move2kube plan -s my-web-app/
$ move2kube transform
```

Move2Kube will ask us some questions to help it decide which artifacts to generate.
For the question on target cluster type we can choose `Openshift`.
The Openshift yamls will be generated in the directory `myproject/deploy/yamls`.
