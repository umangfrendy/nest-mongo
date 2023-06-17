import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Category } from "../schemas/book.schema";

export class CreteBookDto{

    @IsNotEmpty()
    @IsString()
    readonly title: string;

    @IsNotEmpty()
    @IsString()
    readonly description: string;

    @IsNotEmpty()
    @IsString()
    readonly author: string;

    @IsNotEmpty()
    @IsNumber()
    readonly price: number;

    @IsNotEmpty()
    @IsString()
    readonly Category: Category;
}