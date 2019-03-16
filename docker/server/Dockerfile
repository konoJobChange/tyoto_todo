FROM golang
# ワークディレクトリを指定
WORKDIR /go/src/tyoto_todo
# RUNコマンドは、build時にコンテナ内で実行される。
# RUN GOOS=linux GOARCH=amd64 go build -o bin/server cmd/app/main.go
# CMDコマンドは完成したコンテナからイメージを作成するときに実行される。
CMD ["GOOS=linux", "GOARCH=amd64", "go", "build", "-o", "/go/bin/server", "./cmd/app/main.go"]

FROM alpine
EXPOSE 8080
CMD ["/go/bin/server"]