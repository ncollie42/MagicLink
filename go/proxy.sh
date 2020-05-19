#!/bin/bash
# Local
grpcwebproxy --backend_addr=10.10.134.112:4242 --allow_all_origins --run_tls_server=false --server_http_max_read_timeout=11m --server_http_max_write_timeout=11m


# Linode
# grpcwebproxy --backend_addr=localhost:4242 --allow_all_origins --server_http_max_read_timeout=11m --server_http_max_write_timeout=11m --server_tls_cert_file=/etc/letsencrypt/live/li258-250.members.linode.com/fullchain.pem --server_tls_key_file=/etc/letsencrypt/live/li258-250.members.linode.com/privkey.pem
