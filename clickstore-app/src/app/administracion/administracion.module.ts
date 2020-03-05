import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarUsuarioComponent } from './agregar-usuario/agregar-usuario.component';
import { UtilidadesModule} from '../Utilidades/utilidades.module';
import { ReactiveFormsModule} from '@angular/forms';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { HttpClientModule} from '@angular/common/http';
import { ServicioUsuariosService } from './servicio-usuarios.service';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { BuscarPipe } from './../pipes/buscar.pipe'
import { NotifierModule, NotifierOptions} from "angular-notifier";


//configuración de las notificaciones
const customNotifierOptions: NotifierOptions = {
	position: {
		horizontal: {
			position: 'right',
			distance: 12
		},
		vertical: {
			position: 'bottom',
			distance: 12,
			gap: 10
		}
	},
	theme: 'material',
	behaviour: {
		autoHide: 3000,
		onClick: false,
		onMouseover: 'pauseAutoHide',
		showDismissButton: true,
		stacking: 4
	},
	animations: {
		enabled: true,
		show: {
			preset: 'slide',
			speed: 300,
			easing: 'ease'
		},
		hide: {
			preset: 'fade',
			speed: 300,
			easing: 'ease',
			offset: 50
		},
		shift: {
			speed: 300,
			easing: 'ease'
		},
		overlap: 150
	}
};


@NgModule({
  declarations: [AgregarUsuarioComponent, ListaProductosComponent, EditarUsuarioComponent,BuscarPipe],
  imports: [CommonModule, UtilidadesModule, ReactiveFormsModule, HttpClientModule,NotifierModule.withConfig( customNotifierOptions)],
  exports: [AgregarUsuarioComponent,ListaProductosComponent,EditarUsuarioComponent],
  providers: [ServicioUsuariosService]
})
export class AdministracionModule { }
