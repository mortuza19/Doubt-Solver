import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material";
import { ActivatedRoute, Router } from "@angular/router";
import { UserModel } from "../shared/data-model";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) {
    this.http.get('./assets/json/users.json')
    .subscribe((data: any) => {
      this.userList = data.data;
    })
  }

  userList: UserModel[] = [];

  getUser(userData: {username: string, pwd: string}) {
    for (let index = 0; index < this.userList.length; index++) {
      const element = this.userList[index];
      if (element.name.toLowerCase() === userData.username.toLowerCase() && element.pwd === userData.pwd) {
        sessionStorage.setItem('userName', element.name);
        sessionStorage.setItem('userId', element.id);
        this.router.navigate(['../home'],{relativeTo: this.route});
        return;
      }
    }
    this.openSnackBar('Wrong sign in credential!');
  }

  setUser(userData: {username: string, pwd: string, useremail: string}) {
    if (!userData.useremail || !userData.useremail || !userData.pwd) {
      this.openSnackBar('Insert all the required credentials!');
      return;
    }
    let newEntry: UserModel = {
      id: Math.floor(Math.random() * 1000000).toString(),
      name: userData.username,
      label: null,
      photoUrl: null,
      pwd: userData.pwd,
      type: "ENDUSER"
    };
    this.userList.push(newEntry);
    this.openSnackBar('User added successfully. Please Login!');
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'End now', {
      duration: 2000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }
}
