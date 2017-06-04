#!/usr/bin/env bash

brew bundle
mongod --verbose --dbpath ./data
