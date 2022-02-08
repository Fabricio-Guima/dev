import { CreateCourseDto } from './create-course.dto';
import { PartialType } from "@nestjs/mapped-types";

//usando as regras de criar um objeto, mas aqui os campos não são obrigatórios
export class UpdateCourseDto extends PartialType(CreateCourseDto) {
   
}
