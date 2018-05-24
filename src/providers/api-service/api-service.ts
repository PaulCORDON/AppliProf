import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Eleve } from '../../model/Eleve';
import { Classe } from '../../model/Classe';
import { ParamEm1 } from '../../model/ParamEm1';
import { ParamEm2 } from '../../model/ParamEm2';
import { ParamEl1 } from '../../model/ParamEl1';

/*
  Generated class for the ApiServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiServiceProvider {

 
  constructor(public http: HttpClient) {
    console.log('Hello ApiServiceProvider Provider');
  }
  apiUrl='http://localhost:9090';


  getEleves(nameClasse: string) {
    // return new Promise(resolve => {
    //   this.http.get(this.apiUrl+'/users').subscribe(data => {
    //     resolve(data);
    //   }, err => {
    //     console.log(err);
    //   });
    // });
  }

  addEleve(data:Eleve):Promise<void> {
    return new Promise((resolve, reject) => {
      let headers:HttpHeaders = new HttpHeaders();
      headers = headers.set('Content-Type','application/json;charset=UTF-8');
      headers = headers.set('Accept', 'application/json');
      /*
      headers = headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
      headers = headers.append('Access-Control-Allow-Origin', '*');
      headers = headers.append('Access-Control-Allow-Headers', "X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding");
      */
     console.log(JSON.stringify(data));
      this.http.post(this.apiUrl+'/eleve', 
                    JSON.stringify(data), 
                    { headers: headers })
        .subscribe(res => {
          resolve();
        }, (err) => {
          reject(err);
        });
    });
  }


  deleteEleve(eleve:Eleve,classe:Classe):Promise<void>{
    return new Promise((resolve, reject) => {
      this.http.delete(this.apiUrl+'/classe/'+classe.nom+'/eleve/'+eleve.nomPrenom)
        .subscribe(res => {
          resolve();
        }, (err) => {
          reject(err);
        });
    });

  }


  getAllClasse(): Promise<Array<Classe>> {    
    return new Promise(resolve => {
      let headers: HttpHeaders = new HttpHeaders();
      headers.append('Accept','application/json');
      this.http.get(this.apiUrl+'/classe').subscribe(data => {
        let json: Array<Classe> = data as Array<Classe>;
        console.log(data);
        resolve(json);
      }, err => {
        console.log(err);
      });
    });
  }

  getClasses(nomClasse:String ):Promise<Classe> {
    return new Promise((resolve, reject) => {

      this.http.get(this.apiUrl+'/classe').subscribe(data => {
        console.log(data);
        let json:Classe = data as Classe;
        resolve(json);
      }, err => {
        reject(err);
        console.log(err);
      });
    });
  }

  addClasse(data:Classe):Promise<void> {
    return new Promise((resolve, reject) => {
      let headers:HttpHeaders = new HttpHeaders();
      headers = headers.set('Content-Type','application/json;charset=UTF-8');
      headers = headers.set('Accept', 'application/json');
      /*
      headers = headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
      headers = headers.append('Access-Control-Allow-Origin', '*');
      headers = headers.append('Access-Control-Allow-Headers', "X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding");
      */
      this.http.post(this.apiUrl+'/classe', 
                    JSON.stringify(data), 
                    { headers: headers })
        .subscribe(res => {
          resolve();
        }, (err) => {
          reject(err);
        });
    });
  }

  deleteClasse(classe:Classe):Promise<void>{
    return new Promise((resolve, reject) => {
      this.http.delete(this.apiUrl+'/classe/'+classe.nom)
        .subscribe(res => {
          resolve();
        }, (err) => {
          reject(err);
        });
    });

  }

  addParamEm1(data:ParamEm1):Promise<void> {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/users', JSON.stringify(data))
        .subscribe(res => {
          resolve();
        }, (err) => {
          reject(err);
        });
    });
  }
  addParamEm2(data:ParamEm2):Promise<void> {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/users', JSON.stringify(data))
        .subscribe(res => {
          resolve();
        }, (err) => {
          reject(err);
        });
    });
  }
  addParamEl1(data:ParamEl1):Promise<void> {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/users', JSON.stringify(data))
        .subscribe(res => {
          resolve();
        }, (err) => {
          reject(err);
        });
    });
  }
  
  getRegistredParam() {
    // return new Promise(resolve => {
    //   this.http.get(this.apiUrl+'/users').subscribe(data => {
    //     resolve(data);
    //   }, err => {
    //     console.log(err);
    //   });
    // });
  }
  
}
