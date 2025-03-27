import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Map of component names to their file paths
const componentPathMap: Record<string, string> = {
  'button': 'src/components/ui/button.tsx',
  'badge': 'src/components/ui/badge.tsx',
  'tabs': 'src/components/ui/tabs.tsx',
  'socialpreview': 'src/components/ui/socialpreview.tsx',
  'eventcard': 'src/components/ui/eventcard.tsx',
  // Add more components as needed
};

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const componentPath = searchParams.get('path');
  
  // Safety check to prevent directory traversal
  if (!componentPath || componentPath.includes('..')) {
    return NextResponse.json({ error: 'Invalid path' }, { status: 400 });
  }
  
  // Get the actual file path
  let filePath = componentPath;
  
  // If it's a component name instead of a path, get the mapped path
  if (componentPath in componentPathMap) {
    filePath = componentPathMap[componentPath];
  }
  
  // Ensure the path is within the components directory
  const fullPath = path.join(process.cwd(), filePath);
  if (!fullPath.startsWith(path.join(process.cwd(), 'src'))) {
    return NextResponse.json({ error: 'Access denied' }, { status: 403 });
  }
  
  try {
    // Read the file
    const fileContent = fs.readFileSync(fullPath, 'utf-8');
    return NextResponse.json({ code: fileContent });
  } catch (error) {
    console.error(`Error reading file ${fullPath}:`, error);
    return NextResponse.json({ error: 'Failed to read file' }, { status: 500 });
  }
} 