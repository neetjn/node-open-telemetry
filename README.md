# node-open-telemetry

This project was created to better understand telemetry, or rather observability from the scope of a RESTful API.
The REST API being traced was forked from [neetjn/ts-express-template](https://github.com/neetjn/ts-express-template) as a simple starter leveraging TypeScript and Express.js.
I'm leveraging the [opentelemetry-js](https://github.com/open-telemetry/opentelemetry-js) which leverages the open telemtry protocol (OTLP) to report service tracing, metrics, and logs to supported services.
In this project I'll be exporting traces to [Zipkin](https://zipkin.io/), an open source tracing backend. I'll also be exporting metrics to [Prometheus](https://prometheus.io/) as a metrics backend.
