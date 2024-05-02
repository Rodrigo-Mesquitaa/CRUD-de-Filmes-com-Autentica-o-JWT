import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './services';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Movie } from '../movie.entity';
import { Repository } from 'typeorm';

describe('MoviesService', () => {
  let service: MoviesService;
  let repository: Repository<Movie>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MoviesService,
        {
          provide: getRepositoryToken(Movie),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
    repository = module.get<Repository<Movie>>(getRepositoryToken(Movie));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of movies', async () => {
      const movies = [{ id: 1, title: 'Movie 1' }, { id: 2, title: 'Movie 2' }] as Movie[];
      jest.spyOn(repository, 'find').mockResolvedValueOnce(movies);
      expect(await service.findAll()).toEqual(movies);
    });
  });

  // Adicione outros testes para as demais funções do serviço MoviesService
});
