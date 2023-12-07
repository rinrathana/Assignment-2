import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

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
      user: '',
      email: '',
      password: '',
    });
  }
}

