import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  
  // Robust path resolution
  const possiblePaths = [
    path.join(process.cwd(), 'content', 'modules'),
    path.join(process.cwd(), '..', 'content', 'modules'),
  ];

  let contentDir = possiblePaths[0];
  for (const p of possiblePaths) {
    if (fs.existsSync(p)) {
      contentDir = p;
      break;
    }
  }

  const filePath = path.join(contentDir, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: 'Module content not found' }, { status: 404 });
  }

  const content = fs.readFileSync(filePath, 'utf8');

  return NextResponse.json({ slug, content });
}