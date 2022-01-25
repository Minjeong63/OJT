// 게시물에 관한 로직을 처리하는 곳
// 여기서 로직을 처리해준 후에 Controller에서 서비스를 불러옴

import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './board-status.enum' 
import {v1 as uuid} from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardRepository } from './board.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from './board.entity';
import { User } from 'src/auth/user.entity';
 
@Injectable()
export class BoardsService {
    constructor(
        @InjectRepository(BoardRepository)
        private boardRepository: BoardRepository,
    ){}

    async getAllBoards(
        user: User
    ) : Promise<Board[]> {
        const query = this.boardRepository.createQueryBuilder('board');

        query.where('board.userId = :userId', {userId: user.id});

        const boards = await query.getMany();

        return boards;
    }
    // getAllBoards(): Board[] {
    //     return this.boards;
    // }

    // createBoard(createBoardDto: CreateBoardDto) {
    //     const { title, description } = createBoardDto;
    //     // 아래 두 문장과 위의 한 문장이 같음
    //     // const title = CreateBoardDto.title;
    //     // const description = CreateBoardDto.description;

    //     const board: Board = {
    //         id: uuid(),
    //         title,
    //         description,
    //         status: BoardStatus.PUBLIC
    //     }
    //     this.boards.push(board);
    //     return board;
    // }
 
    // getBoardById(id: string): Board {
    //     const found = this.boards.find((board) => board.id === id);

    //     if(!found) {
    //         throw new NotFoundException(`Can't find Board with id ${id}`);
    //     }
    //     return found;
    // }

        createBoard(createBoardDto: CreateBoardDto, user: User): Promise<Board> {
            return this.boardRepository.createBoard(createBoardDto, user);
        }




        async getBoardById(id: number): Promise <Board>{
            const found = await this.boardRepository.findOne(id);
        
            if(!found) {
                throw new NotFoundException(`Can't find Board with id ${id}`);
            }

            return found
        }

        async deleteBoard(id: number, user: User): Promise<void> {
            const result = await this.boardRepository.delete({id, user});

            if(result.affected === 0) {
                throw new NotFoundException(`Can't find Board with id ${id}`);                    
            }
        }

        async updateBoardStatus(id: number, status: BoardStatus): Promise<Board> {
            const board = await this.getBoardById(id);

            board.status = status;
            await this.boardRepository.save(board);

            return board;
        }

    // deleteBoard(id: string): void {
    //     const found = this.getBoardById(id)
    //     this.boards = this.boards.filter((board) => board.id !== found.id)
    // }

    // updateBoardStatus(id: string, status: BoardStatus): Board {
    //     const board = this.getBoardById(id);
    //     board.status = status;
    //     return board
    // }
}
// private을 사용한 이유는 다른 곳에서 boards라는 배열을 수정하지 못하게 하기 위해서
//: Board[] 처럼 타입을 정의해주는 이유는 원하는 타입과 다른 코드를 사용할 시 에러를 발생시키고, 코드를 읽는 입장에서도 더 코드를 쉽게 이해할 수 있음
// id값을 유니크하게 주기 위해서 uuid 모듈을 사용할 것임