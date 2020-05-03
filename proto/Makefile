GOOUTPUT = ../go/logingRPC
JSOUTPUT = ../vue/src/logingRPC
JSPLUGIN = ../vue/node_modules/.bin/protoc-gen-ts
all:
	protoc --go_out=plugins=grpc:$(GOOUTPUT) *.proto
	protoc --js_out=import_style=commonjs,binary:$(JSOUTPUT) *.proto
	protoc --plugin=protoc-gen-ts=$(JSPLUGIN) --ts_out=service=grpc-web:$(JSOUTPUT) *.proto