import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NotificationsService } from '../services/notifications.service';

import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[
    NotificationsService
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent implements OnInit {
  
  myForm!: FormGroup;

  isActive = 'none';
  isNotActive = true;
  eyeActive = false;
  eyeInActive = true;
  showPassword = false;

  errorMessage: string = '';

  constructor(private fb: FormBuilder, private registerService: RegisterService, private notificationService: NotificationsService) { 
    this.myForm = this.fb.group({
      email:['', [Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(3)]],
      name:['', [Validators.required]]

    })    
  }

  ngOnInit(): void {

  }

  onSubmmit():void {
    console.log("submit")
    if (this.myForm.valid){
      console.log("form valido")
      this.registerService.registerUser(this.myForm.value).subscribe({
        next: (res) => {
          console.log('registro realizado com sucesso');
        },
        error: (err) => {
          console.log(err.error.message)
          //this.errorMessage = err.error.message || 'Erro ao registrar usuario'
          this.showNotification(err.error.message)
        },
      })

    } else {
      console.log("entreiaqui")
      console.log(this.myForm)
      this.isNotActive = !this.isNotActive;

    }
    
  }

  onMouseEnter() {
    this.eyeActive = true;
    this.eyeInActive = false;
    this.showPassword = true;

  }

  onMouseLeave() {
    this.eyeActive = false;
    this.eyeInActive = true;
    this.showPassword = false;
  }

  showNotification(message: string){
    this.notificationService.showMessageWarning(message)
  }

}
