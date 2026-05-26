import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  
  // Content is self-contained inside course-builder/content/modules/
  const contentDir = path.join(process.cwd(), 'content', 'modules');

  const filePath = path.join(contentDir, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: 'Module content not found' }, { status: 404 });
  }

  const content = fs.readFileSync(filePath, 'utf8');

  return NextResponse.json({ slug, content });
}