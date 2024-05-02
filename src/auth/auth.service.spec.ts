import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from 'src/app.module';
import { CreateMovieDto } from 'src/movies/dto/create-movie.dto';

import { UpdateMovieDto } from 'src/movies/dto/update-movie.dto';

describe('MoviesController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/movies (GET)', async () => {
    return request(app.getHttpServer())
      .get('/movies')
      .expect(200)
      .expect([]);
  });

  it('/movies/:id (GET)', async () => {
    const response = await request(app.getHttpServer())
      .post('/movies')
      .send({ title: 'Test Movie', year: 2022, genres: ['Action'] } as CreateMovieDto);
    
    const movieId = response.body.id;
    
    return request(app.getHttpServer())
      .get(`/movies/${movieId}`)
      .expect(200)
      .expect({
        id: movieId,
        title: 'Test Movie',
        year: 2022,
        genres: ['Action'],
      });
  });

  it('/movies (POST)', async () => {
    const createMovieDto: CreateMovieDto = {
        title: 'New Movie',
        year: 2021,
        genres: ['Comedy', 'Drama'],
        director: ''
    };
    
    return request(app.getHttpServer())
      .post('/movies')
      .send(createMovieDto)
      .expect(201)
      .expect((res) => {
        expect(res.body.title).toBe(createMovieDto.title);
        expect(res.body.year).toBe(createMovieDto.year);
        expect(res.body.genres).toEqual(createMovieDto.genres);
      });
  });

  it('/movies/:id (PUT)', async () => {
    const createMovieDto: CreateMovieDto = {
        title: 'Update Test Movie',
        year: 2020,
        genres: ['Action'],
        director: ''
    };

    const createResponse = await request(app.getHttpServer())
      .post('/movies')
      .send(createMovieDto);

    const movieId = createResponse.body.id;

    const updateMovieDto: UpdateMovieDto = {
      title: 'Updated Movie Title',
    };

    return request(app.getHttpServer())
      .put(`/movies/${movieId}`)
      .send(updateMovieDto)
      .expect(200)
      .expect((res) => {
        expect(res.body.title).toBe(updateMovieDto.title);
        expect(res.body.year).toBe(createMovieDto.year); // Year should remain unchanged
        expect(res.body.genres).toEqual(createMovieDto.genres); // Genres should remain unchanged
      });
  });

  it('/movies/:id (DELETE)', async () => {
    const createMovieDto: CreateMovieDto = {
        title: 'Delete Test Movie',
        year: 2020,
        genres: ['Action'],
        director: ''
    };

    const createResponse = await request(app.getHttpServer())
      .post('/movies')
      .send(createMovieDto);

    const movieId = createResponse.body.id;

    return request(app.getHttpServer())
      .delete(`/movies/${movieId}`)
      .expect(200);
  });
});
