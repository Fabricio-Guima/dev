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
    findAll(@Res() response) {
       return response.status(200).send(this.coursesService.findAll());
    }

    @Get(':id')
    findOne(@Res() response, @Param('id') id:string) {
        return response.status(200).send(this.coursesService.findOne(id));
    }

    @Post()
    create(@Body() CreateCourseDto: CreateCourseDto) {
        console.log('create',CreateCourseDto)
        return (this.coursesService.create(CreateCourseDto));
    }

    @Patch(':id')
    update(@Param('id') id:string, @Body() udapteCourseDto: UpdateCourseDto, @Res() response) {
        return response.status(200).send(this.coursesService.update(id,udapteCourseDto));
    }

    @Delete(':id')
    delete(@Param('id') id:string,  @Res() response) {
        return response.status(200).send(this.coursesService.remove(id));

    }
}
