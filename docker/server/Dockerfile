# 開発用サーバーでホットリロードしてくれる
FROM golang as developer
COPY ./server /go/src/tyoto_todo
# ワークディレクトリを指定
WORKDIR /go/src/tyoto_todo
# RUNコマンドは、build時にコンテナ内で実行される。
RUN go get github.com/pilu/fresh
EXPOSE 8080

# バイナリ化担当
FROM golang as builder
COPY --from=developer /go /go
WORKDIR /go/src/tyoto_todo
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o /go/bin/server cmd/app/main.go

# 実行環境
FROM alpine as run_server
COPY --from=builder /go/bin/server /usr/src/server
EXPOSE 8080
CMD ["/usr/src/server"]