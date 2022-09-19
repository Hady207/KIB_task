// Services example
import { ErrorException } from '../../errors/errorException';
import DBClient from '../../models/prismaClient';
import { Post } from './types/post';

export class PostService {
  async getPosts(): Promise<Post[]> {
    try {
      const posts = await DBClient.instance.post.findMany({});
      return posts;
    } catch (error: any) {
      throw new ErrorException(error.code, error.message);
    }
  }

  async getPost(postId: string): Promise<Post | null> {
    try {
      const post = await DBClient.instance.post.findUnique({
        where: {
          id: postId,
        },
      });

      return post;
    } catch (error: any) {
      throw new ErrorException(error.code, error.message);
    }
  }

  async createPost(postBody: {
    title: string;
    body: string;
  }): Promise<Post | null> {
    try {
      const { title, body } = postBody;
      const post = await DBClient.instance.post.create({
        data: {
          title,
          body,
        },
      });
      return post;
    } catch (error: any) {
      throw new ErrorException(error.code, error.message);
    }
  }

  // Testing
  // async populateTestPosts(postsNumber: number) {
  //   try {
  //     for (let i = 0; i < postsNumber; i++) {
  //       await DBClient.instance.post.create({
  //         data: {
  //           title: `this is the ${i} post in the appz`,
  //           category: {
  //             connect: {
  //               id: 'b5952809-98ad-457f-9150-d6c5ce387349',
  //             },
  //           },
  //           author: {
  //             connect: {
  //               id: '1ad0c85c-9595-48ff-a56e-0648035cd4d7',
  //             },
  //           },
  //         },
  //       });
  //     }
  //     return true;
  //   } catch (error: any) {
  //     throw new ErrorException(error.code, error.message);
  //   }
  // }

  async updatePost(
    postId: string,
    updatedBody: { title: string; body: string },
  ): Promise<Post | null> {
    try {
      const optionBody = {
        where: {
          id: postId,
        },
        data: {
          title: updatedBody.title,
          body: updatedBody.body,
        },
      };

      return await DBClient.instance.post.update(optionBody);
    } catch (error: any) {
      throw new ErrorException(error.code, error.message);
    }
  }

  async deletePosts() {
    try {
      const deletedPosts = await DBClient.instance.post.deleteMany();
      return deletedPosts;
    } catch (error: any) {
      throw new ErrorException(error.code, error.message);
    }
  }

  async deletePost(postId: string) {
    try {
      const deletedPosts = await DBClient.instance.post.delete({
        where: { id: postId },
      });
      return deletedPosts;
    } catch (error: any) {
      throw new ErrorException(error.code, error.message);
    }
  }
}
