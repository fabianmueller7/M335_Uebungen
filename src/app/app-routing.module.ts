import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./navigation/navigation.module').then( m => m.NavigationPageModule)
  },
  {
    path: 'navigation',
    loadChildren: () => import('./navigation/navigation.module').then( m => m.NavigationPageModule)
  },
  {
    path: 'navigation-detail',
    loadChildren: () => import('./navigation-detail/navigation-detail.module').then( m => m.NavigationDetailPageModule)
  },
  {
    path: 'zahlen',
    loadChildren: () => import('./zahlen/zahlen.module').then( m => m.ZahlenPageModule)
  },
  {
    path: 'string',
    loadChildren: () => import('./string/string.module').then( m => m.StringPageModule)
  },
  {
    path: 'objekte',
    loadChildren: () => import('./objekte/objekte.module').then( m => m.ObjektePageModule)
  },
  {
    path: 'array',
    loadChildren: () => import('./array/array.module').then( m => m.ArrayPageModule)
  },
  {
    path: 'data',
    loadChildren: () => import('./data/data.module').then( m => m.DataPageModule)
  },
  {
    path: 'rechner',
    loadChildren: () => import('./rechner/rechner.module').then( m => m.RechnerPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
