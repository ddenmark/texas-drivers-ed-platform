import fs from 'fs';
import path from 'path';

export interface ModuleContent {
  slug: string;
  title: string;
  content: string;
  targetDuration?: string;
  statutoryTopics?: string[];
}

// Content is now self-contained inside course-builder/content/modules/
const contentDir = path.join(process.cwd(), 'content', 'modules');

export function getAllModuleContents(): ModuleContent[] {
  if (!fs.existsSync(contentDir)) {
    return [];
  }

  const files = fs.readdirSync(contentDir).filter(file => file.endsWith('.md') && file !== 'index.md' && file !== 'MODULE-TEMPLATE.md');

  return files.map(filename => {
    const filePath = path.join(contentDir, filename);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const slug = filename.replace('.md', '');

    // Simple parsing - extract title from first heading
    const titleMatch = fileContent.match(/^# (.+)$/m);
    const title = titleMatch ? titleMatch[1] : slug;

    return {
      slug,
      title,
      content: fileContent,
    };
  });
}

export function getModuleContent(slug: string): ModuleContent | null {
  const allModules = getAllModuleContents();
  return allModules.find(m => m.slug === slug) || null;
}