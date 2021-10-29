import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  userUrl: string = 'http://localhost:3000/users';
  constructor(private httpClient: HttpClient) { }


  login(user: any) {
  
    return this.httpClient.post(`${this.userUrl}/login`, user);


  }

  signUp(user: any) {
    return this.httpClient.post(`${this.userUrl}/signup`, user);

  }
  addUser(user: any) {
    return this.httpClient.post(this.userUrl, user);

  }

  editUser(user: any) {
    return this.httpClient.put(`${this.userUrl}/{user._id}`, user);

  }

  getAllUsers() {
    return this.httpClient.get<{ users: any }>(this.userUrl);

  }

  getUserById(id: any) {
    console.log('service id', id);

    return this.httpClient.get<{ user: any }>(`${this.userUrl}/${id}`); //response type 

  }

  deleteUser(id: any) {
    return this.httpClient.delete<{ message: string }>(`${this.userUrl}/${id}`); //return value : <{message:string}>
  }

}


