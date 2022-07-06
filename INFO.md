# Info

OKD https://www.okd.io/ is the free community version of the licensed Openshift Container Platforms (OCP) https://www.redhat.com/en/openshift-4
OKD is upstream of OCP in the same way Fedora is upstream of RHEL.

## Overview

OpenShift is a family of containerization software products developed by Red Hat. Its flagship product is the OpenShift Container Platform — a hybrid cloud platform as a service built around Linux containers orchestrated and managed by Kubernetes on a foundation of Red Hat Enterprise Linux. The family's other products provide this platform through different environments: OKD serves as the community-driven upstream (akin to the way that Fedora is upstream of Red Hat Enterprise Linux), Several deployment methods are available including self managed, cloud native under ROSA, ARO and RHOIC on AWS, Azure, and IBM Cloud respectively, OpenShift Online as software as a service, and OpenShift Dedicated as a managed service.

The OpenShift Console has developer and administrator oriented views. Administrator views allow one to monitor container resources and container health, manage users, work with operators, etc. Developer views are oriented around working with application resources within a namespace. OpenShift also provides a CLI that supports a superset of the actions that the Kubernetes CLI provides.

## History

OpenShift originally came from Red Hat's acquisition of Makara, a company marketing a platform as a service (PaaS) based on Linux containers, in November 2010. OpenShift was announced in May 2011 as proprietary technology and did not become open-source until May of 2012. Up until v3, the container technology and container orchestration technology used custom developed technologies. This changed in v3 with the adoption of Docker as the container technology, and Kubernetes as the container orchestration technology. The v4 product has many other architectural changes - a prominent one being a shift to using CRI-O as the container runtime (and Podman for interacting with pods and containers), and Buildah as the container build tool, thus breaking the exclusive dependency on Docker.

## Differences between Kubernetes and Openshift

| Kubernetes | Openshift Container Platforms |
| --- | --- |
| Containers run as normal | Containers run as a random user for security reasons |
| No built-in CI/CD | Has BuildConfig and ImageStreams for building and pushing images in the cluster |
| No built-in registry | Built-in image registry (useful for in-cluster builds) |
| Free | Open source but requires license to use |
| No customer service | Customer service and Tech support are available |
| - | `oc` tool is a superset of `kubectl` tool |
| - | Runs on RHEL |
