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
service-stop:
	docker-compose stop
db-start:
	docker-compose up -d db
db-connect_local:
	mysql --host 127.0.0.1 --port 3306 -u user -ppassword
phpmyadmin-start:
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d phpmyadmin
db_and_phpmyadmin-start:
	$(MAKE) db-start \
	&& $(MAKE) phpmyadmin-start
open_phpmyadmin:
	open http://localhost:8081