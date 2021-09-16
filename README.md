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

# e2e 테스트 end-to-end

NODE_ENV - Set to 'test' if it's not already set to something else.
test 안에 e2e-spec.ts 파일들을 검색 하여 테스트를 진행한다


| command | 기능 |
|:---:|---|
| `beforeEach` | `파일의 각 테스트가 실행 되기 전마다 호출` |
| `beforeAll` | `모든 함수가 호출 되기 전에 호출` |
| `afterEach` | `파일의 각 테스트가 종료 될 때마다 호출` |
| `afterAll` | `모든 함수가 끝나고 호출` |

```
  describe('AppController (e2e)', () => {
    let app: INestApplication;

    beforeAll(async () => {
      const moduleFixture: TestingModule = await Test.createTestingModule({
        imports: [AppModule],
      }).compile();

      app = moduleFixture.createNestApplication();
      
      app.useGlobalPipes(
        new ValidationPipe({
          whitelist: true,
          forbidNonWhitelisted: true,
          transform: true,
        }),
      );
      await app.init();
    });

    describe('/movies', () => {
      it('GET', () => {
        return request(app.getHttpServer())
          .get('/movies')
          .expect(200);
      });
    });
    describe('/movies/:id', () => {
      it('GET 200', () => {
        return request(app.getHttpServer())
          .get('/movies/1')
          .expect(200);
      });
      it.todo('DELETE');
      ...
    });
  });
```
