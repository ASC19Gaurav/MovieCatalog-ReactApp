import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ticket } from '../../../model/ticket';
import { TicketService } from '../../../services/ticketservice';
import { Router } from '@angular/router';
import { MatchServices } from '../../../services/matchservice';

@Component({
  selector: 'app-book-tickets',
 
  templateUrl: './book-tickets.component.html',
  styleUrl: './book-tickets.component.css'
})
export class BookTicketsComponent implements OnInit {
  ticketForm: FormGroup;
  matchOptions:string[] = []; // Sample match options
  tickets: Ticket[] = [];

  constructor(
    private fb: FormBuilder,
    private ticketService: TicketService,
    private router: Router,
    private matchService:MatchServices
  ) {
    this.ticketForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      age: ['', [Validators.required, Validators.min(18), Validators.max(100)]],
      matchName: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.min(1)]],
      date: ['', Validators.required],
    });
  }

  ngOnInit(): void {
      this.matchService.getAuthUsers().subscribe((data)=>{
        this.matchOptions = [...this.matchOptions, ...data.map(item => item.matchName)];
      })
  }

  onSubmit() {
    if (this.ticketForm.valid) {
      const formData = {
        ...this.ticketForm.value,
        id: this.generateUniqueId(),
      };

      console.log('Form Data:', formData);

      this.ticketService.addTicket(formData).subscribe({
        next: (response) => {
          console.log('Ticket Confirmed', response);
          this.router.navigate(['/home']);
        },
        error: (error) => {
          console.error('Error saving Ticket data:', error);
          alert('Failed to save user data. Please try again.');
        },
      });
    }
  }

  generateUniqueId(): string {
    const lastCounter = Number(localStorage.getItem('currentTicketIdCounter')) || 1;
    const uniqueNumber = lastCounter.toString().padStart(4, '0');
    const id = `T${uniqueNumber}`;
    localStorage.setItem('currentTicketIdCounter', (lastCounter + 1).toString());
    return id;
  }
}
