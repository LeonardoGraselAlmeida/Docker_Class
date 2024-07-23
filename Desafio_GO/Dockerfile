FROM golang:1.23rc2 AS builder

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN go build

FROM golang:1.23rc2-alpine3.20

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app  /usr/src/app

ENTRYPOINT [ "go", "run", "desafio"]