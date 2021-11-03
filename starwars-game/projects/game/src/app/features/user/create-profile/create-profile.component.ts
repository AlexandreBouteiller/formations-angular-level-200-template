import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'game-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {
  user: any
  profileForm !: FormGroup // ! pour ne pas avoir à l'initialiser

  constructor(private formBuilder: FormBuilder) {
    this.profileForm = this.formBuilder.group({
      surname: ['valeur par défaut', [Validators.required, Validators.minLength(20)]]
    })
  }

  ngOnInit(): void {
  }

  save() {
    const monObjet = this.profileForm.value
  }

}

// SCAM : Déclaration du module dans le composant
@NgModule({
  declarations: [
    CreateProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    // Permet d'utiliser le composant dans un html en dehors du module
    CreateProfileComponent
  ]
})
export class UserModule { }
