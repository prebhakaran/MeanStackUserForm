import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  email="";
  password="";

// create a sservice file and call backend from there

  constructor(private authService:AuthService,
    private router:Router
  ){

  }
  onSubmit(){
    const user ={
      email:this.email,
      password:this.password
    };

    this.authService.signup(user).subscribe(
      ()=>this.router.navigate(['/login']),
      (err)->console.error(err)
    );
    
  }

}
