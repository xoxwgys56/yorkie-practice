# NOTE

## build

follow [this guide](https://github.com/yorkie-team/yorkie#developing-yorkie)

```shell
make build
```

## test

```shell
make test
```

result

```shell
go clean -testcache
go test -tags integration -race ./...
?   	github.com/yorkie-team/yorkie/api	[no test files]
ok  	github.com/yorkie-team/yorkie/api/converter	1.340s
ok  	github.com/yorkie-team/yorkie/client	0.898s
?   	github.com/yorkie-team/yorkie/cmd/yorkie	[no test files]
?   	github.com/yorkie-team/yorkie/internal/cli	[no test files]
?   	github.com/yorkie-team/yorkie/internal/log	[no test files]
?   	github.com/yorkie-team/yorkie/internal/version	[no test files]
ok  	github.com/yorkie-team/yorkie/pkg/cache	0.510s
ok  	github.com/yorkie-team/yorkie/pkg/document	2.098s
?   	github.com/yorkie-team/yorkie/pkg/document/change	[no test files]
ok  	github.com/yorkie-team/yorkie/pkg/document/checkpoint	1.817s
ok  	github.com/yorkie-team/yorkie/pkg/document/json	1.281s
?   	github.com/yorkie-team/yorkie/pkg/document/key	[no test files]
?   	github.com/yorkie-team/yorkie/pkg/document/operation	[no test files]
?   	github.com/yorkie-team/yorkie/pkg/document/proxy	[no test files]
ok  	github.com/yorkie-team/yorkie/pkg/document/time	1.491s
ok  	github.com/yorkie-team/yorkie/pkg/llrb	0.854s
ok  	github.com/yorkie-team/yorkie/pkg/pq	1.302s
ok  	github.com/yorkie-team/yorkie/pkg/splay	0.491s
?   	github.com/yorkie-team/yorkie/pkg/types	[no test files]
?   	github.com/yorkie-team/yorkie/test/helper	[no test files]
ok  	github.com/yorkie-team/yorkie/test/integration	28.636s
ok  	github.com/yorkie-team/yorkie/yorkie	1.359s
?   	github.com/yorkie-team/yorkie/yorkie/auth	[no test files]
ok  	github.com/yorkie-team/yorkie/yorkie/backend	2.913s
ok  	github.com/yorkie-team/yorkie/yorkie/backend/db	3.313s
?   	github.com/yorkie-team/yorkie/yorkie/backend/db/mongo	[no test files]
?   	github.com/yorkie-team/yorkie/yorkie/backend/sync	[no test files]
ok  	github.com/yorkie-team/yorkie/yorkie/backend/sync/etcd	3.279s
ok  	github.com/yorkie-team/yorkie/yorkie/backend/sync/memory	1.528s
?   	github.com/yorkie-team/yorkie/yorkie/clients	[no test files]
?   	github.com/yorkie-team/yorkie/yorkie/metrics	[no test files]
ok  	github.com/yorkie-team/yorkie/yorkie/metrics/prometheus	1.700s
?   	github.com/yorkie-team/yorkie/yorkie/packs	[no test files]
ok  	github.com/yorkie-team/yorkie/yorkie/rpc	2.606s
?   	github.com/yorkie-team/yorkie/yorkie/rpc/interceptors	[no test files]
```

looks like need testcase

---

## more ref

- [crdt is future](https://news.hada.io/topic?id=2962)
- [how to figma use crdt](https://www.figma.com/blog/how-figmas-multiplayer-technology-works/)

## TODO

design document is hard to read. need to read priority.  
I started with about [gc-for-text-type](https://github.com/yorkie-team/yorkie/blob/main/design/gc-for-text-type.md)

- [design doc](https://github.com/yorkie-team/yorkie/tree/main/design)
