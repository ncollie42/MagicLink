#!/bin/bash

grpcwebproxy --backend_addr=10.10.134.112:4242 --allow_all_origins --run_tls_server=false --server_http_max_read_timeout=11m --server_http_max_write_timeout=11m
