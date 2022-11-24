import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  dataSet = [
    {
      patientID: 'person1',
      FirstName: 'John Brown',
      lastName: 32,
      birth: 'New York No. 1 Lake Park',
      gender: '',
      insurance: '',
      address: 'London No. 1 Lake Park',
      contactNumber: 123,
      nextKin: '',
    },
    {
      patientID: 'person1',
      FirstName: 'John Brown',
      lastName: 32,
      birth: 'New York No. 1 Lake Park',
      gender: '',
      insurance: '',
      address: 'London No. 1 Lake Park',
      contactNumber: 123,
      nextKin: '',
    },
    {
      patientID: 'person1',
      FirstName: 'John Brown',
      lastName: 32,
      birth: 'New York No. 1 Lake Park',
      gender: '',
      insurance: '',
      address: 'London No. 1 Lake Park',
      contactNumber: 123,
      nextKin: '',
    },
  ];
  theadFelids = [
    'Patient ID',
    'First name',
    'Last name',
    'Date of birth',
    'Gender',
    'Primary insurance',
    'Address',
    'Contact number',
    'Next of kin',
    'operation',
  ];
  genderOption = [
    {
      key: 'Female',
      value: 'Female',
    },
    {
      key: 'Male',
      value: 'Male',
    },
    {
      key: 'Unspecified',
      value: 'Unspecified',
    },
  ];
  insuranceOption = [
    {
      key: 'Medicare',
      value: 'Medicare',
    },
    {
      key: 'Private Health Insurance',
      value: 'Private Health Insurance',
    },
  ];

  validateForm!: FormGroup;
  isVisible = false;
  isConfirmLoading = false;

  constructor(
    private fb: FormBuilder,
    private nzMessageService: NzMessageService
  ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      formLayout: ['horizontal'],
      fieldA: [
        null,
        [
          // Validators.required
        ],
      ],
      filedB: [
        null,
        [
          // Validators.required
        ],
      ],
    });
  }
  cancel(): void {
    this.nzMessageService.info('click cancel');
  }

  confirm(data: any): void {
    for (let i = 0; i < this.dataSet.length; i++) {
      if (this.dataSet[i].patientID === data.patientID) {
        this.dataSet.splice(i, 1);
        break;
      }
    }
    console.log(this.dataSet, 'curDel');
    this.nzMessageService.info('click confirm');
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
  showModal(data?: any): void {
    console.log(data);
    this.isVisible = true;
  }

  handleOk(): void {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isConfirmLoading = false;
    }, 1000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }
}
