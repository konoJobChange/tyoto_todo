setup:
	$(MAKE) front-setup
front-setup:
	docker-compose run --rm front sh -c "npm i -g create-react-app && create-react-app ."
front-start:
	docker-compose run --rm --service-ports front npm start
server-setup:
	docker-compose build server
server-start:
	docker-compose up server
server-stop:
	docker-compose stop server
