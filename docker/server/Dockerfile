FROM golang
# ワークディレクトリを指定
WORKDIR /go/src/tyoto_todo
CMD go build -o /go/bin/server ./cmd/app/main.go

FROM alpine
EXPOSE 8080
CMD ["/go/bin/server"]