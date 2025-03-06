package com.sports.springboot.controller;

// TicketController.java

import com.sports.springboot.entity.Player;
import com.sports.springboot.entity.Ticket;
import com.sports.springboot.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/tickets")
@CrossOrigin(origins = "http://localhost:4200")
public class TicketController {

    @Autowired
    private TicketService ticketService;

    // Get all tickets
    @GetMapping
    public List<Ticket> getAllTickets() {
        return ticketService.getAllTickets();
    }

    // Get a ticket by ID
//    @GetMapping("/{id}")
//    public ResponseEntity<Ticket> getTicketById(@PathVariable String id) {
//        Optional<Ticket> ticket = ticketService.getTicketById(id);
//        return ticket.map(ResponseEntity::ok)
//                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
//    }

    // Add a new ticket
    @PostMapping
    public Ticket addTicket(@RequestBody Ticket ticket) {
        return ticketService.addTicket(ticket);
    }

    // Update an existing ticket
//    @PutMapping("/{id}")
//    public ResponseEntity<Ticket> updateTicket(@PathVariable String id, @RequestBody Ticket ticket) {
//        Ticket updatedTicket = ticketService.updateTicket(id, ticket);
//        return updatedTicket != null ? ResponseEntity.ok(updatedTicket)
//                : ResponseEntity.status(HttpStatus.NOT_FOUND).build();
//    }

    // Delete a ticket
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTicket(@PathVariable String id) {
        ticketService.deleteTicket(id);
        return ResponseEntity.noContent().build();
    }
}
