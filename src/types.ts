export type Language = 'en' | 'sw';

export type PageId =
  | 'home'
  | 'about'
  | 'work'
  | 'programs'
  | 'impact'
  | 'resources'
  | 'news'
  | 'involved'
  | 'contact';

export interface ImpactCounter {
  id: string;
  labelEn: string;
  labelSw: string;
  value: string;
  descriptionEn: string;
  descriptionSw: string;
  isPlaceholder: boolean;
}

export interface NewsStory {
  id: string;
  titleEn: string;
  titleSw: string;
  categoryEn: string;
  categorySw: string;
  date: string;
  readTime: string;
  excerptEn: string;
  excerptSw: string;
  contentEn: string;
  contentSw: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
}

export interface ResourceDocument {
  id: string;
  titleEn: string;
  titleSw: string;
  category: 'guidelines' | 'compliance' | 'training' | 'reports';
  format: 'PDF' | 'DOCX' | 'XLSX';
  fileSize: string;
  date: string;
  descriptionEn: string;
  descriptionSw: string;
}

export interface TanzaniaRegion {
  id: string;
  name: string;
  zone: 'Coastal' | 'Central' | 'Lake' | 'Northern' | 'Southern Highlands' | 'Zanzibar';
  status: 'Active Engagement' | 'Needs Assessment' | 'Pilot Phase';
  facilitiesCount: string;
  descriptionEn: string;
  descriptionSw: string;
  coordinates: { x: number; y: number }; // Relative percentage for map plotting
}

export interface TeamMemberPlaceholder {
  id: string;
  roleEn: string;
  roleSw: string;
  departmentEn: string;
  departmentSw: string;
  placeholderName: string;
  statusNote: string;
}

export interface OrganizationSettings {
  contactEmail: string;
  contactPhone: string;
  phoneNotice: string;
  officeLocation: string;
  officeHours: string;
  hoursEn: string;
  hoursSw: string;
  registrationStatus: string;
}
