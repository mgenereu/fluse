import { createConnection } from "typeorm";
import { commentFixture, execute, postFixture, userFixture } from "./fixtures";
import { Comment } from "./model/Comment";
import { Post } from "./model/Post";
import { User } from "./model/User";

beforeAll(async () => {
  await createConnection({
    type: "sqlite",
    database: "database.db",
    entities: [User, Post, Comment],
  });
});

it("should create many posts", async () => {
  const { manyPosts } = await execute(
    postFixture("manyPosts", {
      list: 3,
      args: {
        author: userFixture.asArg(),
        comments: commentFixture.asArg({
          list: 3,
          args: { author: userFixture.asArg() },
        }),
      },
    })
  );

  expect(manyPosts).toBeDefined();
  expect(manyPosts.length).toBe(3);
  expect(manyPosts[0].id).toBeDefined();
  expect(manyPosts[0].title).toEqual(expect.any(String));
  expect(manyPosts[0].body).toEqual(expect.any(String));
  expect(manyPosts[0].author).toBeDefined();
  expect(manyPosts[0].author.id).toBeDefined();
  expect(manyPosts[0].author.username).toEqual(expect.any(String));
  expect(manyPosts[0].comments.length).toBe(3);
});
