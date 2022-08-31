import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import ValidationService from '../../service/validation/validation.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss'],
})
class AdminPanelComponent implements OnInit {
  constructor(private fb : FormBuilder, private validationService : ValidationService) {}
  cardCreationForm = this.fb.group({
    title:['',[Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    description: ['', Validators.maxLength(255)],
    image: ['', [Validators.required, this.validationService.urlValidator()]],
    link: ['', [Validators.required, this.validationService.urlValidator()]],
    date: ['', [Validators.required, this.validationService.validFutureDateValidator()]]
  })
  log(val : any) {console.log(val)}
  ngOnInit(): void {
  }
}
export default AdminPanelComponent;
