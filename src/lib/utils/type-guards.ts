import { ContentSection, BulletPointHeader } from '@/types/case-study';

export function isContentSection(section: ContentSection | BulletPointHeader): section is ContentSection {
  return 'heading' in section;
}

export function isBulletPointHeader(section: ContentSection | BulletPointHeader): section is BulletPointHeader {
  return 'subtitle' in section && !('heading' in section);
}
