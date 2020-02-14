import { Component, OnInit,TemplateRef  } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modulos-externos',
  templateUrl: './modulos-externos.component.html',
  styleUrls: ['./modulos-externos.component.scss']
})
export class ModulosExternosComponent implements OnInit {

  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) 
  {

  }


  ngOnInit(): void {
  }

  openModal(template: TemplateRef<any>) 
  {
    this.modalRef = this.modalService.show(template);
  }

}
