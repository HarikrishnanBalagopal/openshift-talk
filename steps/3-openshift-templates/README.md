# Templetatize the deployment yamls

So far we have used things present in both Kubernetes and Openshift.
Now we will use an Openshift specific feature to templatize our deployment yamls.

The deployment yamls we created are working fine however they are not great for on-going development.
If we make some changes to our app like changing the name of our app, the port it runs on, if we create a new container image,
or if we just want to scale up our app with more replicas, then we need to edit the yamls. This can quickly become tedious,
time-consuming and error prone if we need to update a common value that appears in multiple places (like app name, port, etc.).

## Openshift Templates

https://docs.openshift.com/container-platform/4.10/openshift_images/using-templates.html

Openshift templates let's us templatize the yamls using a special parameter expansion `${}` syntax:

```
When using the ${PARAMETER_NAME} syntax, multiple parameter references can be combined in a single field and the reference can be embedded within fixed data, such as "http://${PARAMETER_1}${PARAMETER_2}". Both parameter values are substituted and the resulting value is a quoted string.

When using the ${{PARAMETER_NAME}} syntax only a single parameter reference is allowed and leading and trailing characters are not permitted. The resulting value is unquoted unless, after substitution is performed, the result is not a valid JSON object. If the result is not a valid JSON value, the resulting value is quoted and treated as a standard string.
```

This allows us to specify all our variables/parameters in one location and reference them in multiple places in the yamls.

## Steps

To write the template we copy all of our yamls into a single file and organize it under the `objects` key as shown in `template.yaml`.
Then we replace every value that we want to parameterize with the `${}` template syntax.

Login to the openshift cluster
```
$ ibmcloud login --sso
$ ibmcloud oc cluster get -c <cluster_name_or_ID>
$ echo 'get a passcode from https://iam.cloud.ibm.com/identity/passcode '
$ oc login -u passcode -p <iam_passcode> --server=<master_URL>
```

After writing the template, we can generate the yamls using the command:

```
$ oc process -f template.yaml -o yaml > generated.yaml
```
and then deploy the generated yamls with
```
$ kubectl apply -f generated.yaml
```

If you have a large number of parameters, you can store them in a file and then pass this file to oc process. Example:

```
$ cat secrets/parameters.env
REGISTRY=my.registry.com
INGRESS_HOST=my.internal.openshift-cluster.com
```

```
$ oc process -f template.yaml --param-file=secrets/parameters.env -o yaml > generated.yaml
```
