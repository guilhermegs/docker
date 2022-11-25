FROM golang as builder
WORKDIR /go/src
COPY . .
RUN go build

FROM scratch
COPY --from=builder /go/src/fullcycle /
CMD ["./fullcycle"]

