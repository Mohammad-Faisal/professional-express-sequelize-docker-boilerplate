up:
	docker-compose up

up-prod:
	docker-compose -f docker-compose.prod.yml up

down: 
	docker-compose down

build-local-image:
	docker image build -t container-name .

run-local-image:
	docker run -it -p 3000:3000 --name container-name container-name

stop-local-image:
	docker stop container-name

kubepath:
	export KUBECONFIG=PATH_TO_KUBECONFIG_FILE

kube-deploy:
	kubectl create -f deployment.yml

kube-serve:
	kubectl apply -f service.yml
