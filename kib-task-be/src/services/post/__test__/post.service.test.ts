import DBClient, { IDBClient } from '../../../models/prismaClient';

const resultArr = [
  {
    id: 'ae56830b-5727-4779-a952-29ff1b3e13ed',
    title: 'this is the post title',
    body: 'this is post body',
    published: false,
    createdAt: '2022-09-19T21:20:29.055Z',
    updatedAt: '2022-09-19T21:20:29.057Z',
  },
];

const result = {
  id: 'ae56830b-5727-4779-a952-29ff1b3e13ed',
  title: 'this is the post title',
  body: 'this is post body',
  published: false,
  createdAt: '2022-09-19T21:20:29.055Z',
  updatedAt: '2022-09-19T21:20:29.057Z',
};

describe('Post Service Service', () => {
  let postModal: any;

  beforeEach(() => {
    postModal = DBClient.instance.post;
  });

  describe('getPosts', () => {
    test('should return an array of posts from the database', async () => {
      jest.spyOn(postModal, 'findMany').mockImplementation(() => resultArr);

      expect(await postModal.findMany({})).toBe(resultArr);
    });
  });

  describe('getPost', () => {
    test('should return a post from the database', async () => {
      jest.spyOn(postModal, 'findUnique').mockImplementation(() => result);

      expect(
        await postModal.findUnique({
          where: {
            id: 'b5952809-98ad-457f-9150-d6c5ce387349',
          },
        }),
      ).toBe(result);
    });
  });

  describe('createPost', () => {
    test('create a Post using the database', async () => {
      jest.spyOn(postModal, 'create').mockImplementation(() => result);

      expect(
        await postModal.create({
          data: {
            title: 'test',
            body: 'test',
          },
        }),
      ).toBe(result);
    });
  });

  describe('updatePost', () => {
    test('update a post using the database', async () => {
      jest.spyOn(postModal, 'update').mockResolvedValue(result);

      expect(
        await postModal.update({
          where: { id: 'b5952809-98ad-457f-9150-d6c5ce387349' },
          data: {
            title: 'test',
            body: 'test',
          },
        }),
      ).toBe(result);
    });
  });

  describe('deletePosts', () => {
    test('delete all posts', async () => {
      jest.spyOn(postModal, 'deleteMany').mockImplementation(() => null);

      expect(await postModal.deleteMany()).toBeNull();
    });
  });
});
