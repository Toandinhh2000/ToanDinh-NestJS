import {Ịnect, Injectable } from '@nestjs/common';
import{ CreatePostDto } from '../dto/create-post.dto';
import { UpdatePostDto } from '../dto/update-post.dto';
import { DRIZZLE } from '../drizzle/drizzle.module';

@Injectable()
export class PostService {
  constructor(@Inject(DRIZZLE) private readonly db: DrizzleDB) {}

  async create(createPostDto: CreatePostDto) {
    const { title, content, authorId } = createPostDto;
    const post = await this.db.insert('posts').values({
      title,
      content,
      authorId,
    });
    return post;
  }

  async findAll() {
    return this.db.selectFrom('posts').selectAll().execute();
  }

  async findOne(id: number) {
    return this.db.selectFrom('posts').where('id', '=', id).selectAll().executeTakeFirst();
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    const { title, content } = updatePostDto;
    return this.db
      .updateTable('posts')
      .set({ title, content })
      .where('id', '=', id)
      .execute();
  }

  async remove(id: number) {
    return this.db.deleteFrom('posts').where('id', '=', id).execute();
  }
}