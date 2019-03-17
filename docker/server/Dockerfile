FROM golang as builder

COPY ./server /go/src/tyoto_todo

# ワークディレクトリを指定
WORKDIR /go/src/tyoto_todo
# RUNコマンドは、build時にコンテナ内で実行される。
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o /go/bin/server cmd/app/main.go
# CMDコマンドは完成したコンテナからイメージを作成するときに実行される。
# CMD ["GOOS=linux", "GOARCH=amd64", "go", "build", "-o", "/go/bin/server", "./cmd/app/main.go"]

FROM alpine
COPY --from=builder /go/bin/server /usr/src/server

EXPOSE 8080
CMD ["/usr/src/server"]