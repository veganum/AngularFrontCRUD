import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [
    { id: 1, nombre: 'José', apellido: 'Franco', email: 'mymail@gmail.com', createAt: '2020-12-11' },
    { id: 2, nombre: 'José', apellido: 'Franco', email: 'mymail@gmail.com', createAt: '2020' },
    { id: 3, nombre: 'José', apellido: 'Franco', email: 'mymail@gmail.com', createAt: '2020' },
    { id: 4, nombre: 'José', apellido: 'Franco', email: 'mymail@gmail.com', createAt: '2020' },
    { id: 5, nombre: 'José', apellido: 'Franco', email: 'mymail@gmail.com', createAt: '2020' },
    { id: 6, nombre: 'José', apellido: 'Franco', email: 'mymail@gmail.com', createAt: '2020' },
    { id: 7, nombre: 'José', apellido: 'Franco', email: 'mymail@gmail.com', createAt: '2020' },
    { id: 8, nombre: 'José', apellido: 'Franco', email: 'mymail@gmail.com', createAt: '2020' },
    { id: 9, nombre: 'José', apellido: 'Franco', email: 'mymail@gmail.com', createAt: '2020' },
    { id: 10, nombre: 'José', apellido: 'Franco', email: 'mymail@gmail.com', createAt: '2020' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
