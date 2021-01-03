import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserslistPage } from './userslist.page';

describe('UserslistPage', () => {
  let component: UserslistPage;
  let fixture: ComponentFixture<UserslistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserslistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserslistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
