import { INestApplication, ValidationPipe } from "@nestjs/common";
import { Test, TestingModule } from '@nestjs/testing'
import * as request from 'supertest';
import { AppModule } from "../src/app.module";

describe('todo endpoints test', () => {
    let app: INestApplication;

    beforeAll(async () => {
        const moduleFixture: TestingModule = await Test.
            createTestingModule({
                imports: [AppModule],
            }).compile();

        app = moduleFixture.createNestApplication();
        app.useGlobalPipes(new ValidationPipe({
            transform: true
        }))
        await app.init();
    });

    describe('GET /todos', () => {
        test('returns all todos', () => {
            return request(app.getHttpServer())
                .get('/todos')
                .expect(200);
        })
    })
})