import {Routes} from '@angular/router'
import { RegisterComponent } from './register/register.component';
import { QuizComponent } from './quiz/quiz.component';
import { AuthGuard } from './auth/auth.guard';

export const appRoutes : Routes =[
    {path:'register',component:RegisterComponent},
    {path:'quiz',component:QuizComponent,canActivate : [AuthGuard]},
    {path:'',redirectTo:'/register',pathMatch:'full'}
];
