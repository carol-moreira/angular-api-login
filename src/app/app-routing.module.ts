// importações
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

// usadas para roteamento, onde configuro as rotas da aplicação

const routes: Routes = [
    {
      path:'login',
      component: LoginComponent // path para aplicação
    },
    {
      path:'',
      redirectTo:'login',
      pathMatch:'full'
    },
    {
      path:'',
      component: LayoutComponent,
      children:  [
        {
          path:'dashboard',
          component: DashboardComponent
        }
      ]
    },
    {
      path:'**',
      component: LoginComponent
    }
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }