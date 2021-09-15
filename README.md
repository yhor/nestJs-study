# NestJs 

## 커맨드  (nest)


| command | 기능 |
|:---:|---|
| `nest g co` | `컨트롤러 추가` |
| `nest g s` | `서비스 추가` |
| `nest g mo` | `모듈 추가` |


## 유닛테스트
spec.ts  파일은 유닉 테스트 이다 생얼을 하고 npm run test:cov 로 얼마나 유닉테스트를 진행했는지 확인할 수 있다.
```
  이런식으로 유닛들을 만들어준다.
  describe('getAll', () => {
    it('should return an array', () => {
      const result = service.getAll();
      expect(result).toBeInstanceOf(Array);
    });
  });
```