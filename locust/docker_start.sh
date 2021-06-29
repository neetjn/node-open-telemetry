#!/bin/sh
locust --headless --host http://localhost:4000 -u 1000 -r 100

