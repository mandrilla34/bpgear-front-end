import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SistemaRoutingModule } from './sistema-routing.module';

import { LayoutTemplate } from './templates/layout/layout.template';
import { EmpresaPage } from './pages/empresa/empresa.page';

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { TokenInterceptor } from '../auth/services/token.interceptor';

import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';
import { ModalEmpresaCriarComponent } from './components/modal-empresa-criar/modal-empresa-criar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxMaskModule } from 'ngx-mask';
import { ReactiveFormsTypedModule } from 'reactive-forms-typed';
import { ModalEmpresaEditarComponent } from './components/modal-empresa-editar/modal-empresa-editar.component';
import { ModalEmpresaDeletarComponent } from './components/modal-empresa-deletar/modal-empresa-deletar.component';

@NgModule({
    declarations: [
        LayoutTemplate,
        EmpresaPage,
        ModalEmpresaCriarComponent,
        ModalEmpresaEditarComponent,
        ModalEmpresaDeletarComponent
    ],
    imports: [
        CommonModule,
        SistemaRoutingModule,
        ReactiveFormsModule,
        SharedModule,
        NgxMaskModule,
        ReactiveFormsTypedModule,
        FontAwesomeModule
    ]
})
export class SistemaModule { }
