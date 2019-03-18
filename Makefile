setup:
	$(MAKE) front-setup
	$(MAKE) server-setup
front-setup:
	docker-compose run --rm front sh -c "npm i -g create-react-app && create-react-app ."
front-start:
	docker-compose run --rm --service-ports front npm start
server-build:
	docker-compose build server
server-start:
	docker-compose up -d server
server-stop:
	docker-compose stop server
server-run:
	$(MAKE) server-build \
	&& $(MAKE) server-start
server-dev:
	export COMPOSE_FILE=docker-compose.yml:docker-compose.dev.yml \
	&& $(MAKE) server-run
service-log:
	docker-compose logs -t