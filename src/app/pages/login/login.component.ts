// importação dos módulos necessários do angular
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

// decorador @Component define as características do componente
@Component({ 
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // objeto para armazenar os dados do formulário de login
  loginObj: any = {
      "EmailId": "",
      "Password": ""
  };
  // construtor do componente
constructor(private http: HttpClient, private router: Router){} //

// função acionada ao pressionar o botão de login no formulário
  onLogin() { 
    debugger;
    this.http.post('/api/User/Login', this.loginObj).subscribe((res:any)=>{
      // verifica se a resposta contém a propriedade 'result' e se seu valor é verdadeiro
      if(res.result){
        alert('login feito com sucesso!'); // mensagem de login
        localStorage.setItem('loginToken', res.data.token); // armqazena o token de login no armazenamento local
        this.router.navigateByUrl('/dashboard'); // redirecionamento
      } else {
        alert('insira os dados corretamente!'); // mensagem de erro
      }
    })
  }
}
