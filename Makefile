.PHONY: init
init:
	make clean
	docker-compose build
	docker-compose run --rm app npm ci

.PHONY: clean
clean:
	docker-compose down --volumes

.PHONY: dev
dev:
	docker-compose down
	docker-compose up

.PHONY: make-grpc-client
make-grpc-client:
	docker-compose run --rm buf npm run gen:services
