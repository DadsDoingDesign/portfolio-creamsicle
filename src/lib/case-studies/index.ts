import { umba } from './umba';
import { apploi } from './apploi';
import { toProject } from '../utils/case-study';

// Convert case studies to projects
export const projects = [umba, apploi].map(toProject);

// Export individual case studies
export * from './apploi';
export * from './umba';

// Import and export other case studies here as they are added
