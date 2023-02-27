import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBookmarkDto, EditBookmarkDto } from './dto';

@Injectable()
export class BookmarkService {
  constructor(private prisma: PrismaService) {}
  getBookmarks(userId: number) {
    return this.prisma.bookmark.findMany({
      where: { userId },
    });
  }
  getBookmarkById(userId: number, bookmarkId: number) {}
  async createBookmark(userId: number, dto: CreateBookmarkDto) {
    const bookmark = await this.prisma.bookmark.create({
      data: { ...dto, userId },
    });
    return bookmark;
  }
  deleteBookmarkById(userId: number, bookmarkId: number) {}
  editBookmarkById(userId: number, bookmarkId: number, dto: EditBookmarkDto) {}
}
