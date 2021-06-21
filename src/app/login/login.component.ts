import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  [x: string]: any;
  loginUserData = { email: ' ', password: ' ' };
  constructor(private _auth: AuthService, private router: Router) {
    console.log(_auth);
  }
  ngOnInit(): void {

  }

  loginUser() {
    this._auth.loginUser(this.loginUserData)
      .subscribe(
        res => {
          console.log(res)
          if (res.success == true) {
            this.router.navigate(['/order'])
          }
        },
        err => console.log(err),
      )
  }
}
