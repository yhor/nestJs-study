import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';
import { MemberModule } from './member/member.module';

@Module({
  imports: [MoviesModule, MemberModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
