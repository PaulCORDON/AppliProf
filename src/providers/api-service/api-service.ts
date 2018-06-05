import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Eleve } from '../../model/Eleve';
import { Classe } from '../../model/Classe';
import { ParamEm1 } from '../../model/ParamEm1';
import { ParamEm2 } from '../../model/ParamEm2';
import { ParamEl1 } from '../../model/ParamEl1';
import { SousCompetence } from '../../model/SousCompetence';

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
  getAllParamEm1():Promise<Array<ParamEm1>> {
    return new Promise(resolve => {
      let headers: HttpHeaders = new HttpHeaders();
      headers.append('Accept','application/json');
      this.http.get(this.apiUrl+'/paramEm1').subscribe(data => {
        let json: Array<ParamEm1> = data as Array<ParamEm1>;
        console.log(data);
        resolve(json);
      }, err => {
        console.log(err);
      });
    });
  }
  getAllParamEm2():Promise<Array<ParamEm2>> {
    return new Promise(resolve => {
      let headers: HttpHeaders = new HttpHeaders();
      headers.append('Accept','application/json');
      this.http.get(this.apiUrl+'/paramEm2').subscribe(data => {
        let json: Array<ParamEm2> = data as Array<ParamEm2>;
        console.log(data);
        resolve(json);
      }, err => {
        console.log(err);
      });
    });
  }  
  getAllParamEl1():Promise<Array<ParamEl1>> {
    return new Promise(resolve => {
      let headers: HttpHeaders = new HttpHeaders();
      headers.append('Accept','application/json');
      this.http.get(this.apiUrl+'/paramEl1').subscribe(data => {
        let json: Array<ParamEl1> = data as Array<ParamEl1>;
        console.log(data);
        resolve(json);
      }, err => {
        console.log(err);
      });
    });
  }
  addParamEl1(data:ParamEl1):Promise<void>{
    return new Promise((resolve, reject) => {
      let headers:HttpHeaders = new HttpHeaders();
      headers = headers.set('Content-Type','application/json;charset=UTF-8');
      headers = headers.set('Accept', 'application/json');
     console.log(JSON.stringify(data));
      this.http.post(this.apiUrl+'/paramEl1', 
                    JSON.stringify(data), 
                    { headers: headers })
        .subscribe(res => {
          resolve();
        }, (err) => {
          reject(err);
        });
    });
  }
  addParamEm1(data:ParamEm1):Promise<void>{
    return new Promise((resolve, reject) => {
      let headers:HttpHeaders = new HttpHeaders();
      headers = headers.set('Content-Type','application/json;charset=UTF-8');
      headers = headers.set('Accept', 'application/json');
     console.log(JSON.stringify(data));
      this.http.post(this.apiUrl+'/paramEm1', 
                    JSON.stringify(data), 
                    { headers: headers })
        .subscribe(res => {
          resolve();
        }, (err) => {
          reject(err);
        });
    });
  }
  addParamEm2(data:ParamEm2):Promise<void>{
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
      this.http.post(this.apiUrl+'/paramEm2', 
                    JSON.stringify(data), 
                    { headers: headers })
        .subscribe(res => {
          resolve();
        }, (err) => {
          reject(err);
        });
    });
  }
  getSousCompetencesEleve(el:Eleve,cl:Classe):Promise<Array<SousCompetence>>{
    return new Promise(resolve => {
      let headers: HttpHeaders = new HttpHeaders();
      headers.append('Accept','application/json');
      this.http.get(this.apiUrl+'/classe/'+cl.nom+'/eleve/'+el.nomPrenom+'/SousCompetence').subscribe(data => {
        let json: Array<SousCompetence> = data as Array<SousCompetence>;
        console.log(data);
        resolve(json);
      }, err => {
        console.log(err);
      });
    });
  }
  getEnonce(mot:String):Promise<Array<String>>{
    return new Promise(resolve => {
      let headers: HttpHeaders = new HttpHeaders();
      headers.append('Accept','application/json');
      this.http.get(this.apiUrl+'/mots/'+mot).subscribe(data => {
        let json: Array<String> = data as Array<String>;
        console.log(data);
        resolve(json);
      }, err => {
        console.log(err);
      });
    });

  }
  
}
