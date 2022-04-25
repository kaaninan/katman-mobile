#!/bin/bash

rm -rf src/main/assets/www
rsync -a ../../src/www/* src/main/assets/www