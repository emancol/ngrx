import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { CounterComponent } from "./counter/counter/counter.component";
import { HomeComponent } from "./home/home.component";
import { PostsListComponent } from "./posts/posts-list/posts-list.component";


const routes: Route[] = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'counter',
        component: CounterComponent
    },
    {
        path: 'posts',
        component: PostsListComponent
    }
]


@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})


export class AppRoutingModule { }