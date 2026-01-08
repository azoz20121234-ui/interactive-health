export interface HealthRecord {
  id: string;
  studentId: string;
  type: 'vaccination' | 'checkup' | 'condition' | 'medication' | 'allergy';
  title: string;
  description: string;
  date: Date;
  documents?: string[];
  metadata?: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;
}
