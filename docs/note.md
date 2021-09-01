# NOTE

## issue

한번에 수많은 개행을 넣으면서 입력했더니 아래와 같은 오류가 발생하면서 프로그램이 멈췄다.

```bash
yorkie  | qemu: uncaught target signal 11 (Segmentation fault) - core dumped
mongo   | {"t":{"$date":"2021-09-01T08:56:52.746+00:00"},"s":"I",  "c":"STORAGE",  "id":22430,   "ctx":"Checkpointer","msg":"WiredTiger message","attr":{"message":"[1630486612:746045][1:0xffff8758fd00], WT_SESSION.checkpoint: [WT_VERB_CHECKPOINT_PROGRESS] saving checkpoint snapshot min: 194, snapshot max: 194 snapshot count: 0, oldest timestamp: (0, 0) , meta checkpoint timestamp: (0, 0) base write gen: 1"}}
^CGracefully stopping... (press Ctrl+C again to force)
```

### `yorkie`를 켜기 전 웹페이지에 들어가있는 경우.
안됨

### `safari` 브라우저에서 들어가는 경우

```sh
yorkie  | qemu: uncaught target signal 11 (Segmentation fault) - core dumped
```

### `brave` browser에서 테스트 한 경우
빠르게 여러 문자를 입력하다 보면 같은 에러 발생

```sh
qemu: uncaught target signal 11 (Segmentation fault) - core dumped
```

## 궁금한거

- `envoy` 로깅을 하는 곳.