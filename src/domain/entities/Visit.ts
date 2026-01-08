export interface Visit {
  id: string;
  studentId: string;
  date: Date;
  chiefComplaint: string;
  symptoms: string[];
  vitalSigns?: {
    temperature?: number;
    bloodPressure?: string;
    heartRate?: number;
    respiratoryRate?: number;
    oxygenSaturation?: number;
  };
  assessment: string;
  treatment: string;
  referralNeeded: boolean;
  referralDetails?: string;
  doctorId: string;
  riskScore?: number;
  aiInsights?: string[];
  createdAt: Date;
  updatedAt: Date;
}
