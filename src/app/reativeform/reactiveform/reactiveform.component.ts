import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent implements OnInit{
  loginForm: FormGroup;

  constructor(private fb: FormBuilder){}
  ngOnInit(): void {
    this.loginForm= this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      dateLine: ['',Validators.required],
      priority: ['', Validators.required]
    });
  }


  onSubmit() {
    console.log('Form value ', this.loginForm.value)
  }
  // onClick(){
  //   alert(45)
  // }
}

