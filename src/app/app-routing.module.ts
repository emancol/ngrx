import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";


const routes: Route[] = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'counter',
        loadChildren: () => import('./counter/counter.module').then((m) => m.CounterModule)
    },
    {
        path: 'posts',
        loadChildren: () => import('./posts/posts.module').then((m) => m.PostsModule)

    }
]


@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})


export class AppRoutingModule { }