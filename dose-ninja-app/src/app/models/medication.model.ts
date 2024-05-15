export class Medication {
  id: number;
  name: string;
  dosage: string;
  frequency: string;
  notes: string;
}
export class Medication {
  // ... existing properties ...

  adherenceStatus: string; // 'taken' or 'missed'
}
