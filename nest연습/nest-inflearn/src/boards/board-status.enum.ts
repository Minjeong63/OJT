// export interface Board {
//     id: string;
//     title: string;
//     description: string;
//     status: BoardStatus
// }
// BoardStatus란? 
// 이 게시물이 공개 게시물인지 아니면 비밀 게시물인지 나눠주는 것
// 이 두가지 상태 이외에는 나오면 안되기 때문에 이 두가지의 상태만 나올 수 있게 하기 위해 타입스크립트의 기능은 enumeration을 사용

export enum BoardStatus {
    PUBLIC = 'PUBLIC',
    PRIVATE = 'PRIVATE',
}