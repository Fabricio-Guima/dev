import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { threadId } from 'worker_threads';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
    private courses: Course[] = [
        {
            id: 1,
            name: "Fundamentos do nestjs",
            description: "Descrição dos fundamentos do nestjs",
            tags: ["nodejs", "nestjs", "javascript"]
        }
    ]


    findAll() {
        return this.courses
    }

    findOne(id: string) {
        const course =  this.courses.find(course => course.id === Number(id))

        if(!course) {
            throw new HttpException(`course id ${id} not found`, HttpStatus.NOT_FOUND)
        }

        return course;
    }

    create(createCourseDto: any) {
         this.courses.push(createCourseDto)
         return createCourseDto
    }

    update(id: string, updateCourseDto: any) {

        const index = this.courses.findIndex(course => course.id ===
            Number(id))

            this.courses[index] = updateCourseDto
    }

    remove(id: string) {

        const index = this.courses.findIndex(course => course.id ===
            Number(id))

        if(index >= 0) {
            this.courses.splice(index, 1)
        }
    }


}
