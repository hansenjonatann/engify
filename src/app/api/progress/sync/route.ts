import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { levelId, chapterId, topicId, isCompleted } = body;

    const progress = await prisma.userProgress.upsert({
      where: {
        userId_chapterId_topicId: {
          userId: session.user.id,
          chapterId,
          topicId
        }
      },
      update: {
        isCompleted: isCompleted ?? true,
        lastReadAt: new Date()
      },
      create: {
        userId: session.user.id,
        levelId,
        chapterId,
        topicId,
        isCompleted: isCompleted ?? true
      }
    });

    return NextResponse.json({ data: progress });
  } catch (error) {
    return NextResponse.json({ error: "Bad Request" }, { status: 400 });
  }
}
