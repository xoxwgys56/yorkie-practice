# Yorkie practice

follow [this video](https://www.youtube.com/watch?v=BCfXRlaQSQc)

## Usage

```sh
# init submodule first
git submodule init
git submodule update --recursive --remote --merge

# init js sdk
cd yorkie-js-sdk
npm install
npm run build
# Start MongoDB, Yorkie and Envoy proxy in a terminal session.
docker-compose -f docker/docker-compose.yml up --build -d

# access front
# now we can access using index.html
```

---

## References

- code mirror
  - [official](https://codemirror.net/)
  - [cdn](https://cdnjs.com/libraries/codemirror)
- crdt
  - [slide](https://mysetting.io/slides/gzc1gekahg)
  - [deview 2013 crdt](https://deview.kr/2013/detail.nhn?topicSeq=66)
  - [crdt vs ot](https://channel.io/ko/blog/crdt_vs_ot)
- etcd
  - [what is etcd by red hat](https://www.redhat.com/ko/topics/containers/what-is-etcd)
