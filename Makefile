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
