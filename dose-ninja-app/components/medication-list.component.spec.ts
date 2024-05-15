import { TestBed } from '@angular/core/testing';
import { MedicationListComponent } from './medication-list.component';

describe('MedicationListComponent', () => {
  let component: MedicationListComponent;
  let fixture: ComponentFixture<MedicationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MedicationListComponent]
    });
  });

  it('should display the medication list', () => {
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('ul').childNodes.length).toBe(2);
  });
});
