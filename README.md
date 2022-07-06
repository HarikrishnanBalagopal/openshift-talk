# Openshift Talk and Hands-On Session

## Topics Covered

- Overview of Kubernetes
- Overview of Openshift
    - History (v3, v4, etc.)
    - Differences with Kubernetes (DeploymentConfig, ImageStreams, Routes, security considerations, etc.)
- Deploy a simple web app to Openshift
    - Install OC CLI and login to an Openshift cluster
    - Download source yamls
    - Deploy
- Use Openshift Templates to parameterize the above deployment
- Use ImageStreams to deploy new images automatically
- How to write a Dockerfile to run on Openshift (file permissions for random user)
- How Move2Kube can help generate the Dockerfiles and yamls for Openshift
- Further reading/References

## References

- `kubectl` CLI tool https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/
- `oc` CLI tool https://docs.openshift.com/container-platform/4.10/cli_reference/openshift_cli/getting-started-cli.html
- `move2kube` CLI tool https://move2kube.konveyor.io/
- Openshift Container Platform API reference https://docs.openshift.com/container-platform/4.10/rest_api/index.html
- Openshift Local System Requirements https://access.redhat.com/documentation/en-us/red_hat_openshift_local/2.5/html/getting_started_guide/installation_gsg
- DeploymentConfig https://docs.openshift.com/container-platform/4.10/rest_api/workloads_apis/deploymentconfig-apps-openshift-io-v1.html#deploymentconfig-apps-openshift-io-v1
- Openshift Templates https://docs.openshift.com/container-platform/4.10/openshift_images/using-templates.html
- ImageStream https://docs.openshift.com/container-platform/4.10/rest_api/image_apis/imagestream-image-openshift-io-v1.html
