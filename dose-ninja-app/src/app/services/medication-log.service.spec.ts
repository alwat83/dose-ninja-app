import { TestBed } from '@angular/core/testing';
import { MedicationLogService } from './medication-log.service';

describe('MedicationLogService', () => {
  let service: MedicationLogService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [MedicationLogService]
    });
  });

  it('should log a medication', () => {
    service.logMedication({ id: 1, name: 'Medication 1' }, true);
    expect(service.getMedicationLogs()).toContain({ medicationId: 1, isTaken: true });
  });
});
