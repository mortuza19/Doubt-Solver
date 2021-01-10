export interface TopicModel {
    id: string,
    subject: string,
    content: string,
    creator: CreatorModel,
    latestCommenter: CommentatorModel,
    status: string,
    label: string,
    permalink: string,
    type: string,
    createdTime: string,
    latestCommentTime: string,
    commentCount: string,
    likeCount: string,
    isVoted: boolean,
    categoryId: string,
    lastCommenter: UserModel
}

export interface CreatorModel {
    id: string;
    name: string;
    photoUrl: string;
    type: string;
    label: string;
}

export interface CommentatorModel {
    name: string;
    id: string;
    type: string;
}


export interface UserModel {
    photoUrl: string;
    name: string;
    id: string;
    label: string;
    type: string;
    pwd?: string;
}