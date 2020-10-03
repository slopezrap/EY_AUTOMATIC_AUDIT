import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ffpp',
  templateUrl: './ffpp.component.html',
  styleUrls: ['./ffpp.component.css']
})
export class FFPPComponent implements OnInit {
  selectedFile: File = null
  constructor() { }

  ngOnInit(): void {
  }
// Funcion que recoge el valor del fichero del front y abre socket con el back
fileChanged = (event) => {
  this.selectedFile = event.target.files[0];
  console.log("hola")
  }

// Funcion que empieza a enviar el fichero y llama a la funcion que gestiona todo
uploadFile() {
  console.log("FRONT: Upload File...")
}

}
