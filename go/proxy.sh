#!/bin/bash

grpcwebproxy --backend_addr=127.0.0.1:4242 --allow_all_origins=true --run_tls_server=false --server_http_max_read_timeout=1m --server_http_max_write_timeout=1m
