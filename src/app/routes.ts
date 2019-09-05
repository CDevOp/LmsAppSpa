import { Routes } from '@angular/router'
import { HomeComponent } from './_components/home/home.component'
import { MemberListComponent } from './_components/members/member-list/member-list.component'
import { MessagesComponent } from './_components/messages/messages.component'
import { ListsComponent } from './_components/lists/lists.component'
import { AuthGuard } from './_guards/auth.guard'
import { MemberDetailComponent } from './_components/members/member-detail/member-detail.component'
import { MemberDetailResolver } from './_resolvers/member-detail.resolver'
import { MemberListResolver } from './_resolvers/member-list.resolver'
import { MemberEditComponent } from './_components/members/member-edit/member-edit.component'
import { MemberEditResolver } from './_resolvers/member-edit.resolver'
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard'
import { ListsResolver } from './_resolvers/lists.resolver'
import { MessagesResolver } from './_resolvers/messages.resolver'
import { AdminPanelComponent } from './_components/admin/admin-panel/admin-panel.component'
import { DeveloperComponent } from './_components/developer/developer.component'

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            {
                path: 'members',
                component: MemberListComponent,
                resolve: { user: MemberListResolver },
            },
            {
                path: 'members/:id',
                component: MemberDetailComponent,
                resolve: { user: MemberDetailResolver },
            },
            {
                path: 'member/edit',
                component: MemberEditComponent,
                resolve: { user: MemberEditResolver },
                canDeactivate: [PreventUnsavedChanges],
            },
            {
                path: 'messages',
                component: MessagesComponent,
                resolve: { messages: MessagesResolver },
            },
            {
                path: 'lists',
                component: ListsComponent,
                resolve: { users: ListsResolver },
            },
            {
                path: 'admin',
                component: AdminPanelComponent,
                data: { roles: ['Admin', 'Moderator'] },
            },
            {
                path: 'dev',
                component: DeveloperComponent,
                data: { roles: ['Developer'] },
            },
        ],
    },
    { path: '**', redirectTo: '', pathMatch: 'full' },
]
