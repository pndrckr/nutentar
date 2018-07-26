import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InfolegalComponent } from './components/infolegal/infolegal.component';
import { HomeComponent } from './components/pages/home/home.component';
import { HablemosComponent } from './components/pages/hablemos/hablemos.component';
import { ProductosComponent } from './components/pages/productos/productos.component';
import { CalidadComponent } from './components/pages/calidad/calidad.component';
import { QuienesComponent } from './components/pages/quienes/quienes.component';
import { ContactoComponent } from './components/pages/contacto/contacto.component';
import { LinksComponent } from './components/pages/links/links.component';
import { NutricionClinicaAdultaComponent } from './components/pages/nutricion-clinica-adulta/nutricion-clinica-adulta.component';
import { SustentaneutroComponent } from './components/pages/sustentaneutro/sustentaneutro.component';

const appRoutes: Routes = [
	{
		path:'',
		component: InfolegalComponent
	},

	{
		path:'home',
		component: HomeComponent
	},

	{
		path:'hablemos',
		component: HablemosComponent
	},

	{
		path:'productos',
		component: ProductosComponent
	},

	{
		path:'calidad',
		component: CalidadComponent
	},

	{
		path:'quienes',
		component: QuienesComponent
	},

	{
		path:'contacto',
		component: ContactoComponent
	},

	{
		path:'links',
		component: LinksComponent
	},

	{
		path:'nutricion-clinica-adulta',
		component: NutricionClinicaAdultaComponent
	},

	{
		path:'sustentaneutro',
		component: SustentaneutroComponent
	},

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
