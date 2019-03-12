setup:
	$(MAKE) front-setup
front-setup:
	cd docker && docker-compose run --rm front sh -c "npm i -g create-react-app && create-react-app ."
front-start:
	cd docker && docker-compose run --rm --service-ports front npm start

