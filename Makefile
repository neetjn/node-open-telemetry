DOCKER_COMMAND := sudo docker

ZIPKIN_IMAGE := openzipkin/zipkin
ZIPKIN_CONTAINER := zipkin

PROJECT_NAME := opentelemetry-demo
PROJECT_VERSION := 0.0.1
SERVICE_IMAGE_NAME := ${PROJECT_NAME}/demo-api:${PROJECT_VERSION}
LOCUST_IMAGE_NAME := ${PROJECT_NAME}/demo-load:${PROJECT_VERSION}
SERVICE_CONTAINER_NAME := api
LOCUST_CONTAINER_NAME := load

build:
	${DOCKER_COMMAND} build ./service -f service/Dockerfile -t ${SERVICE_IMAGE_NAME}
	${DOCKER_COMMAND} build ./locust -f locust/Dockerfile -t ${LOCUST_IMAGE_NAME}

clean:
	${DOCKER_COMMAND} rm -f ${ZIPKIN_CONTAINER} ${SERVICE_CONTAINER_NAME} ${LOCUST_CONTAINER_NAME}

stage:
	@echo "Starting up zipkin service"
	${DOCKER_COMMAND} run --rm -d -p 9411:9411 --name ${ZIPKIN_CONTAINER} ${ZIPKIN_IMAGE}
	sleep 5
	@echo "Spinning up demo service api"
	${DOCKER_COMMAND} run --rm -d -p 4000:4000 --name ${SERVICE_CONTAINER_NAME} ${SERVICE_IMAGE_NAME}
	sleep 5
	@echo "Starting artificial load"
	${DOCKER_COMMAND} run --rm -d -p 8089:8089 --name ${LOCUST_CONTAINER_NAME} ${LOCUST_IMAGE_NAME}

