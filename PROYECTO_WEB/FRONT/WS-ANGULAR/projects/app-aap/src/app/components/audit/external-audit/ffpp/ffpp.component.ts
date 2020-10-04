import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../../../../services/audit/external-audit/ffpp/upload-file.service'
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ffpp',
  templateUrl: './ffpp.component.html',
  styleUrls: ['./ffpp.component.css']
})

export class FFPPComponent implements OnInit {
  form: FormGroup;
  response;
  ficheroSubir=null;
  constructor(private formBuilder: FormBuilder, private uploadFileService: UploadFileService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      profile: ['']
    });
  }
// Funcion que recoge el valor del fichero del front y abre socket con el back
fileChanged(event) {
  if (event.target.files.length > 0) {
    this.ficheroSubir = event.target.files[0];
    this.form.get('profile').setValue(this.ficheroSubir);
  }
}
// Funcion que empieza a enviar el fichero y llama a la funcion que gestiona todo
uploadFile() {
  console.log("FRONT: Upload File...")
  const formData = new FormData();
  formData.append('plantilla_xlsx', this.form.get('profile').value);

  this.uploadFileService.upload(formData).subscribe(
    (res) => {
      this.response = res;
    },
    (err) => {  
      console.log(err);
    }
  );


}

}
