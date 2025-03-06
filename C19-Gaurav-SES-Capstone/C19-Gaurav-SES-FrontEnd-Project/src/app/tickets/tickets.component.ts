import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../../model/ticket';
import { TicketService } from '../../../services/ticketservice';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent implements OnInit{
tickets:Ticket[]=[];
constructor(private ticketService:TicketService){}

ngOnInit(): void {
  this.ticketService.getTickets().subscribe((data) => {
    this.tickets=data;
   })
}
getMatches(){
  this.ticketService.getTickets().subscribe((data) => {
    this.tickets=data;
   })
}
}
