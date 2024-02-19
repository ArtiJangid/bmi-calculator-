import { Component } from '@angular/core';
import { BmiServiceService } from '../service/bmi-service.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-bmi-form',
  templateUrl: './bmi-form.component.html',
  styleUrls: ['./bmi-form.component.css']
})

export class BmiFormComponent {

  result: any;
  data: any;
  userBmi: any;
  bmiCatogery: any;

  constructor(private bmiService: BmiServiceService,
    private formBuilder: FormBuilder) { }
    userForm = this.formBuilder.group({
    heightInCM : '',
    weightInKG : '',
    gender : '',
    age : ''
  });

ngOnInit(){

}

getBmi(){
  this.data = this.bmiService.calculateBmi(this.userForm.value).subscribe((data: any) => {
    this.result = data;
    this.userBmi = data.userBmi;
    this.bmiCatogery = data.bmiCatogery
  });
}
}
