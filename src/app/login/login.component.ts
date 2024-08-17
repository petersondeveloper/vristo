import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NotificationsService } from '../services/notifications.service';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit {

    myForm!: FormGroup;

    constructor(private fb: FormBuilder,  private authService:AuthService,  private notificationService:NotificationsService, private router:Router) { }

    isActive = 'none';
    isNotActive = true;
    isEmailNotActive = true;
    eyeActive = false;
    eyeInActive = true;
    showPassword = false;

    ngOnInit(): void {
        this.myForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]]
        })
    }

    onSubmmit(): void {
        console.log("submit")
        if (this.myForm.valid) {
            console.log(this.myForm)
            this.authService.authUser(this.myForm.value).subscribe({
                next:(res) => {
                    console.log('Autenticado com sucesso')
                    this.notificationService.showMessageOk('Login efetuado com Sucesso').then((response)=>{
                        if (response){
                            console.log("edu bom");
                            this.router.navigate(['/main']);
                        }
                        console.log(response)
                    })

                }, 
                error: (err) =>{
                    console.log(err.error.message)
                    this.notificationService.showMessageError(err.error.message)
                }
            })
            
        } else {
            console.log(this.myForm)
            console.log('NaoOk')
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

}
