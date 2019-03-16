setup:
	$(MAKE) front-setup
front-setup:
	cd docker && docker-compose run --rm front sh -c "yarn install"
front-start:
	cd docker && docker-compose up --build

