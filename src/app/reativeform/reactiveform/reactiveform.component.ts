import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Todo } from 'src/app/interface/todo';
import { ReactiveFormService } from 'src/app/service/reactive-formservice';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss'],
}) 
export class ReactiveformComponent implements OnInit {
  public reactiveForm: FormGroup;
  todo: Todo[] = [];
  displayedColumns: string[] = ['title',  'description','deadline', 'priority'];

  constructor(private fb: FormBuilder, private reactiveFormSerivce: ReactiveFormService) {}

  ngOnInit() : void {
    this.createForm();
    this.getToDoList();
  }

  private createForm() {
    this.reactiveForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      deadline: ['', Validators.required],
      priority: ['low'],
    });
  }

  public onSubmit() {
    this.reactiveFormSerivce.addTodoList(this.reactiveForm.value);
    // console.log('Form value ', this.loginForm.value)
    // console.log('hi');
    this.reactiveForm.reset();
    this.reactiveForm.get('priority').setValue('low');
  }

  private getToDoList(){
    this.todo = this.reactiveFormSerivce.getTodoList();
  }
}
