import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'; 

import { StatsListComponent } from './stats-list.component';
import { Stat } from '../services/statistique.service';

fdescribe('StatsListComponent', () => {
  let component: StatsListComponent;
  let fixture: ComponentFixture<StatsListComponent>;
  let mock: HttpTestingController

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsListComponent ],
      imports: [HttpClientTestingModule],
      providers: []
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsListComponent);
    component = fixture.componentInstance;
    mock = TestBed.inject(HttpTestingController)
    // fixture.detectChanges();
  });

  // integration test
  // Ici c'est le TU
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should list 2 stats items', () => {
    fixture.detectChanges()
    const request = mock.expectOne('une_url')
    const stats: Stat[] = [{}, {}]
    request.flush(stats)
    // Nécessité de regénérer le composant car résultat reçu
    fixture.detectChanges()
    const table = fixture.nativeElement.querySelector('table.stats')
    expect(table).toBeTruthy()
    expect(table.rows.length).toEqual(2)
  })
});
