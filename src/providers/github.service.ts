import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

import { User } from '../models/user.interface';
import { Repository } from '../models/repository.interface';

import { USER_LIST } from '../mocks/user.mocks';
import { REPOSITORY_LIST } from '../mocks/repository.mocks';


@Injectable()
export class GithubService {

  private baseUrl:string = 'https://api.github.com/users';
  private reposUrl:string = 'repos';

  constructor(private http: HttpClient) {
    console.log('Hello GithubServiceProvider Provider');
  }

  private logData(response:Response) {
    console.log(response);
  }
  private handleError(error:Response | any) {
    return Observable.throw(error || 'Server error.');
  }

  getUserInfo(username:string):Observable<User> {
    return this.http.get(`${this.baseUrl}/${username}`)
      .do(this.logData)
      .catch(this.handleError)
  }
  getRepositoryInfo(username:string):Observable<Repository[]> {
    return this.http.get(`${this.baseUrl}/${username}/${this.reposUrl}`)
      .do(this.logData)
      .catch(this.handleError)
  }

  // Find the repositories from REPOSITORY_LIST, equal to the username passed in.
  // Return the results as an Observable
  mockGetRepositoryInfo(username:string):Observable<Repository[]> {
    return Observable.of(REPOSITORY_LIST.filter(repository => repository.owner.name === username))
  }

  // Find the username from USER_LIST, equal to the username passed in.
  // Return the results as an Observable
  mockGetUserInfo(username:string):Observable<User> {
    return Observable.of(USER_LIST.filter(user => user.name === username)[0]);
  }

}
