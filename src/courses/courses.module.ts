import { CoursesService } from './courses.service';
import { Module } from '@nestjs/common';
import { CoursesController } from './courses.controller';

@Module({
    controllers:[CoursesController],
    providers:[CoursesService]
})
export class CoursesModule {}
