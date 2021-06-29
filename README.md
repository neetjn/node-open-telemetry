# node-open-telemetry

This project was created to better understand open telemetry and tracing + observability from the scope of a RESTful API.
The REST API being traced was forked from [neetjn/ts-express-template](https://github.com/neetjn/ts-express-template) as a simple starter leveraging TypeScript and Express.js.
I'm leveraging [opentelemetry-js](https://github.com/open-telemetry/opentelemetry-js) which uses the open telemtry protocol (OTLP) to report service tracing, metrics, and logs to supported services.
In this project I'll be exporting traces to [Zipkin](https://zipkin.io/), an open source tracing backend.

I've wired up the express starter with open telemetry, and using Docker I've orchestrated dependant services.
To access the Zipkin to view tracing, use `http://localhost:9411`.

The docker container built with this repository will preheat the tracing backend with an artificial load constructed using [locust](https://locust.io/).

---

Copyright (c) 2021 John Nolette Licensed under the MIT license.
