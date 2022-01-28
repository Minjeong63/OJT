import { isNotEmpty, IsNotEmpty } from "class-validator";

export class CreateCatDto {
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    description: string;
}