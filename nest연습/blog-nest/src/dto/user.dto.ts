
/**
 * @description SRP를 위반하는 구조이지만 테스트용으로 한 파일에 두 클래스를 선언했다.
 *
 * SRP란: 한 클래스는 하나의 책임만 가져야한다. (단일 책임의 원칙)
 */

import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { PartialType } from '@nestjs/graphql';


export class CreateUserDto {
    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsString()
    @IsNotEmpty()
    name: string;
}


// PartialType() : 입력 유형의 모든 속성이 선택 사항으로 설정된 유형(클래스)을 반환
export class UpdateUserDto extends PartialType(CreateUserDto) {}