import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm;
  isSubmit:boolean=false;
  constructor() { 

    this.contactForm = new FormGroup({
      'cname': new FormControl('', [Validators.required,Validators.minLength(4)]),
      'cemail': new FormControl('', [Validators.required,Validators.email]),
      'csubject': new FormControl('', Validators.required),
      'cmessage': new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
  }

  sendData() {
    if (this.contactForm.valid) {
      this.isSubmit=true;
    }
  }

}
