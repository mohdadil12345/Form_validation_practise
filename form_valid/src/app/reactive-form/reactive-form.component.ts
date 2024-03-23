import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  Signup_form = new FormGroup({
    // username : new FormControl("", Validators.required),
    // pattern
    username : new FormControl("", [Validators.required, Validators.pattern('[a-zA-Z]+$')]),

    email : new FormControl("", [Validators.required, Validators.email]),
    password : new FormControl("", [Validators.required, Validators.minLength(6)]),

    confirmPassword : new FormControl("", Validators.required)
});




formSubmitted : boolean = false 


handle_form() {
  // console.log(this.Signup_form);
  this.formSubmitted = true

  if(!this.pass_match()){
   alert("Password does not matched")
     
  }else{
    alert("signup successfull")


    let user = {
      username : this.Signup_form.value.username,
      email : this.Signup_form.value.email,
      password : this.Signup_form.value.password,
      confirmPassword : this.Signup_form.value.confirmPassword
  
    }
  
    console.log("user", user)

  }



}











// getter for username
 get uservaldtr () {
   return this.Signup_form.get('username')
 }

//  emailvalid    AbstractControl | null 
 get emailvalidr () {
   return this.Signup_form.get('email')
 }

//  password
get pasvald () {
   return this.Signup_form.get("password")
}

// confirm_password  

get confirmvalid() {
    return this.Signup_form.get("confirmPassword")
}

//  password match
pass_match() : boolean {
  return this.Signup_form.value.password == this.Signup_form.value.confirmPassword;
}


}
