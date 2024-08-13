/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Feed as PrismaFeed, User as PrismaUser } from "@prisma/client";

export class FeedServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.FeedCountArgs, "select">): Promise<number> {
    return this.prisma.feed.count(args);
  }

  async feeds(args: Prisma.FeedFindManyArgs): Promise<PrismaFeed[]> {
    return this.prisma.feed.findMany(args);
  }
  async feed(args: Prisma.FeedFindUniqueArgs): Promise<PrismaFeed | null> {
    return this.prisma.feed.findUnique(args);
  }
  async createFeed(args: Prisma.FeedCreateArgs): Promise<PrismaFeed> {
    return this.prisma.feed.create(args);
  }
  async updateFeed(args: Prisma.FeedUpdateArgs): Promise<PrismaFeed> {
    return this.prisma.feed.update(args);
  }
  async deleteFeed(args: Prisma.FeedDeleteArgs): Promise<PrismaFeed> {
    return this.prisma.feed.delete(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.feed
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}