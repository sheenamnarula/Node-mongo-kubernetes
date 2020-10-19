# Post Links  

## For Kubernetes architecture
```
http://sheenamnarula93.com/post/kubernetes-part-1/

```

## Set up kubernetes on local system 

```
https://sheenamnarula93.com/post/kubernetes-part-2/

```

## Kubernetes Configuration file explanation
```
https://sheenamnarula93.com/post/kubernetes-part-3/

```


How to run code :
1. Install Minikube (refer above link : Set up kubernetes on local system ) 

2. Run below command in terminal
```
minikube start
```
3. Now run below commands : 

To create persistent volume : 
```
kubectl apply -f k8s/persistentVol.yaml           

```

To create claim for persistent volume (required for pods to access the volume):

```
kubectl apply -f k8s/persistentVolClaim.yaml

```
To deploy mongo service : 
```
kubectl apply -f k8s/mongodb.yaml

```

To deploy node application (will run on port 30007): 
```
kubectl apply -f k8s/node-app.yaml
```

In case, you want to practice multiple applications to access
same volume, run one more application(port number :30009) :

```
kubectl apply -f k8s/node-app-2.yaml

```
4. Run command to check for deployment : we will use minikube dashboard for ease.

```
minikube dashboard
```

You will manage your deployments running in dashboard.

5. To acces node app on browser :

```
kubectl get nodes -o wide
```
This command will give you an IP. Open IP:30007 (MENTIONED PORT IN CONFIG) in browser to see access your app.

If you want to make any changes in app then you need to build docker image again.For this : 

1. Build a docker image 
```
docker image build -t [ImageName] .

```
2. Create a repository on docker hub
3. Tag local image to repositry created
```
docker tag {local image tag name}:latest {new repo tag name}

```
4. Push local image to dockerhub
```
docker push {new repo tag name}
```


