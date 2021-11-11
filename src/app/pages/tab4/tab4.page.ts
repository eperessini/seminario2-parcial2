import { Component, OnInit } from '@angular/core';
import {DataLocalService} from '../../services/data-local.service';
import {CursosService} from '../../services/cursos.service';
import { Curso } from 'src/app/interfaces/curso';
import { Inscripcion } from 'src/app/interfaces/inscripcion';
import { ResponseDto } from 'src/app/interfaces/responseDto';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  cursos: Curso[] = [];
  
  constructor(public cursosService: CursosService, public dataLocalService: DataLocalService) { }

  ngOnInit() {

    this.cursosService.getInscripciones("emiliano.peressini@gmail.com").subscribe(resp => {
      if (resp.status === 0) {
        this.cursos = resp.data;
      }
    });
  }

}
