import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-driven',
  templateUrl: './driven.component.html',
  styleUrls: ['./driven.component.scss']
})
export class DrivenComponent implements  OnInit{
  
  formDriven!: FormGroup;

  constructor(private formBuilder: FormBuilder){
  }
  ngOnInit(): void {
    this.createForm();
  }
  
  private createForm(){
    this.formDriven = this.formBuilder.group({
      name: '',
      gender: ''
    });
  }
}
