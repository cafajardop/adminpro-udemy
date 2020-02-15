import { MedicoService } from '../../services/medico/medico.service';
import { Component, OnInit } from '@angular/core';
import { Hospital } from '../../models/hospital.model';
import { HospitalService } from '../../services/hospital/hospital.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Medico } from 'src/app/models/medico.model';


@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styles: []
})
export class MedicoComponent implements OnInit {

  forma: FormGroup;
  hospitales: Hospital[] = [];
  medico: Medico = new Medico();

  constructor(public medicoService: MedicoService,
    public hospitalService: HospitalService) {

    this.forma = new FormGroup({
      'nombreMedico': new FormControl(),
      'hospital': new FormControl()
    });

  }

  ngOnInit() {
    this.hospitalService.cargarHospitales()
      .subscribe(hospitales => {
        return this.hospitales = hospitales;
      });
  }

  guardarMedico() {
    console.log('id hospital', this.forma.value.hospital);


    this.medico.hospital = this.forma.value.hospital;
    this.medico.nombre = this.forma.value.nombreMedico;


    if (!this.forma.valid) {
      return;
    }

    this.medicoService.guardarMedico(this.medico)
      .subscribe(medico => {

        console.log('el medico es', medico);
      });
  }
}