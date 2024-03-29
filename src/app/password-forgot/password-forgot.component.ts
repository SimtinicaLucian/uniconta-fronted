import { Component, OnInit } from '@angular/core';
import { UserService} from '../services/user.service';
import { AlertService } from "ngx-alerts";
import { ProgressBarService } from '../services/progress-bar.service';

@Component({
  selector: 'app-password-forgot',
  templateUrl: './password-forgot.component.html',
  styleUrls: ['./password-forgot.component.scss']
})
export class PasswordForgotComponent implements OnInit {
  form: any = {};

  
  isLoginFailed = false;



  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = ''

  constructor(private userService : UserService, 
    public progressBar: ProgressBarService,
    private alertService: AlertService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.alertService.info('Se lucreaza la trimiterea e-mailului');
    this.progressBar.startLoading();

    this.userService.sendEmail(this.form).subscribe(
      data => {
        this.progressBar.setSuccess();
        this.alertService.success('Verificati adresa de email pentru a schimba parola');
        console.log('Check email to change password');
        this.progressBar.completeLoading();
      },

      err => {
        this.progressBar.setError();
        console.log(err);
        this.alertService.danger(err.error.message);
        this.progressBar.completeLoading();

      }
    );


  }

}
