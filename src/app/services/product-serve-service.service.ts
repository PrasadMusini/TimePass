import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pets, product, TimePassClass, User } from '../class/time-pass-class';

@Injectable({
  providedIn: 'root'
})
export class ProductServeServiceService {
  timePassPost(timepass: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }


  productServe(data:pets){
    return this.http.post('http://localhost:3001/pets',data)
  }

  addToList(){
    return this.http.get<product[]>('http://localhost:3001/products')
  }

  public getAllDetails():Observable<any>{
    return this.http.get<User[]>("http://localhost:8080/get")
  }

  public addProduct(data: any):Observable<any>{
    return this.http.post("http://localhost:8080/signup",data)
  }

  public getName(data:any):Observable<any>{
    return this.http.get<any>(`http://localhost:8080/getUserName?email=${data.email}`)
  }

  public deleteService(id:number)
  {
    return this.http.delete(`http://localhost:3001/products/${id}`)
  }

  public getProductById(id:any)
  {
    return this.http.get<product>(`http://localhost:3001/products/${id}`)
  }

  public updateProduct(product:product)
  {
    return this.http.put<product>(`http://localhost:3001/products/${product.id}`,product)
  }

  public searchService(query:string){
    return this.http.get<product[]>(`http://localhost:3001/products?q=${query}`)
  }
  

  public loginUserFromRemote(user: User):Observable<any>{
    return this.http.post("http://localhost:8080/signin",user)
  }

  public signupFromRemote(user:User):Observable<any>{
    return this.http.post<any>("http://localhost:8080/signup", user);
  }

  // pets
  public petsAuthService(val: pets){    
    return this.http.post('http://localhost:3000/pets',val);
 }

//  From TimePassService
public getDataRemotly():Observable<any>{
  return this.http.get<TimePassClass[]>('http://localhost:3000/users');
}
}
