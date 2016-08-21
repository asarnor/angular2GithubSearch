import {Injectable} from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

  private username = 'asarnor';
  private clientId = 'e076567d00f464896edc';
  private clientSecret = '6347c2171e775586d9ff5b3c2137b2c252c291be';
  private appString ='?client_id='+ this.clientId +'&client_secret='+ this.clientSecret;

  constructor( private _http: Http ){
    console.log('github service');
  }

  getUser(){
    return this._http.get( 'https://api.github.com/users/' + this.username + this.appString )
      .map( res => res.json() )
  }

  getRepos(){
    return this._http.get( 'https://api.github.com/users/' + this.username+'/repos' + this.appString )
      .map( res => res.json() )
  }
  updateUserName(username:any){
    this.username = username;
  }
}
