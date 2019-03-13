import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// componentes
import { AppComponent } from './app.component';
import { UserInsertComponent } from './users/user-insert/user-insert.component';
import { UserListComponent } from './users/user-list/user-list.component';

// rotas
import { rootRouterConfig } from './app.routing.module';

// serviços
import { UserService } from '../app/services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserInsertComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false })
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})

export class AppModule { }
