import { NextResponse } from 'next/server';
import z from 'zod';
import prisma from '@/prisma/client';

export async function POST(request: NextResponse) {
  const body = await request.json();
  console.log(body);

  // implement request validation with zod
  const createIssueSchema = z.object({
    title: z.string().min(1).max(255),
    description: z.string().min(1),
  });

  const validation = createIssueSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  // create a new issue with prisma
  const newIssue = await prisma.issue.create({
    data: {
      title: body.title,
      description: body.description,
    },
  });

  return NextResponse.json(newIssue, { status: 201 });
}
