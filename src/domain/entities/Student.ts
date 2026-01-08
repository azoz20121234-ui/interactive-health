export interface Student {
  id: string;
  nationalId: string;
  name: string;
  grade: string;
  section: string;
  dateOfBirth: Date;
  parentContact: {
    name: string;
    phone: string;
    email?: string;
  };
  medicalHistory?: string[];
  allergies?: string[];
  chronicConditions?: string[];
  createdAt: Date;
  updatedAt: Date;
}
