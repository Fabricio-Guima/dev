import { UpdateCourseDto } from './dto/update-course.dto';
import { CreateCourseDto } from './dto/create-course.dto';
import { CoursesService } from './courses.service';
import { Body, Controller, Delete, Get, Param, Patch, Post, Res } from '@nestjs/common';

// course é a rota /courses
@Controller('courses')
export class CoursesController {
    constructor(private readonly coursesService:CoursesService){

    }
    @Get()
    async findAll(@Res() response) {
       return response.status(200).send(await this.coursesService.findAll());
    }

    @Get(':id')
    async findOne(@Res() response, @Param('id') id:string) {
        return response.status(200).send(await this.coursesService.findOne(id));
    }

    @Post()
    create(@Body() CreateCourseDto: CreateCourseDto) {
        console.log('create',CreateCourseDto)
        return (this.coursesService.create(CreateCourseDto));
    }

    @Patch(':id')
    async update(@Param('id') id:string, @Body() updapteCourseDto: UpdateCourseDto, @Res() response) {
        console.log('patch', updapteCourseDto)
        console.log('id', id)
        return response.status(200).send(await this.coursesService.update(id,updapteCourseDto));
    }

    @Delete(':id')
    delete(@Param('id') id:string,  @Res() response) {
        return response.status(200).send(this.coursesService.remove(id));

    }
}
