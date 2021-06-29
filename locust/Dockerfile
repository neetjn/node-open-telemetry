FROM python:3.8-slim
WORKDIR /app
COPY . .
RUN pip3 install pipenv
RUN pipenv install --system
RUN which locust
EXPOSE 8089
CMD ["./docker_start.sh"]

