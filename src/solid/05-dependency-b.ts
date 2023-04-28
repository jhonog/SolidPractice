import { JsonDataBaseService } from "./05-dependency-c";

export interface Post {
    body: string;
    id: number;
    title: string;
    userId: number;
}


export class PostService {

    private posts: Post[] = [];

    constructor() { }

    async getPosts() {

        const postProvider = new JsonDataBaseService();

        this.posts = await postProvider.getPostJson();

        return this.posts;
    }
}
