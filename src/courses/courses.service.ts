import { UpdateCourseDto } from './dto/update-course.dto';
import { CreateCourseDto } from './dto/create-course.dto';
import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {

   constructor(
       @InjectRepository(Course)
       private readonly courseRepository: Repository<Course>
   ) {}


    async findAll() {      
        const courses =  await this.courseRepository.find();      
        return courses
    }

    async findOne(id: string) {
        const course =  await this.courseRepository.findOne(id)

        if(!course) {
            throw new HttpException(`course id ${id} not found`, HttpStatus.NOT_FOUND)
        }

        return course;
    }

    create(createCourseDto: CreateCourseDto) {
         const course = this.courseRepository.create(createCourseDto);

         return this.courseRepository.save(course)
    }

    async update(id: string, updateCourseDto: UpdateCourseDto) {
        console.log('aqui', updateCourseDto)
        const course = await this.courseRepository.preload({
            id: +id,
            ...updateCourseDto
        })
        console.log('preload', course)

        if(!course) {
            throw new NotFoundException(`course id ${id} not found`)
        }

        return this.courseRepository.save(course)
     
    }

    async remove(id: string) {

       const course = await  this.courseRepository.findOne(id)

       if(!course) {
        throw new NotFoundException(`course id ${id} not found`)
        }

        return  this.courseRepository.remove(course)
    }


}
