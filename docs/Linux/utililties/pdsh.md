---
id: 'pdsh'
title: 'pdsh'
---

## pdsh란

하둡 강좌를 들으며 설치를 진행해보고 있는데, 뜬금없이 pdsh를 설치하라는 과정이 있었다. pdsh는 처음 들어보는 유틸리티라서 정리해봤다.

pdsh는 **여러 개의 target에 ssh로 접속해서 동일한 명령어를 실행하는 유틸리티**이다. ansible 같은 역할을 하는 것 같다. 

## 사용법
### pdsh를 이용해 전체 node를 일괄 shutdown 하기
```bash
$ pdsh -w host[01-10] 'shutdown -h now'
```

### 자매품(?) pdcp를 이용해 전체 node에 일괄 파일, 디렉터리 복사하기
```bash
# master node의 /root/.bashrc를 host01-10의 /root로 복사하기
$ pdcp -w host[01-10] /root/.bashrc /root

# master node의 /root/package 디렉터리를 host01-10의 /root로 복사한다.
$ pdcp -r -w host[01-10] /root/package /root (-r option 추가)
```