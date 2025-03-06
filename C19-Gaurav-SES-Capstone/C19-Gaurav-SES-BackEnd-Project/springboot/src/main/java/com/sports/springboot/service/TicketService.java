package com.sports.springboot.service;


import com.sports.springboot.entity.Ticket;
import com.sports.springboot.repository.TicketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TicketService {

    @Autowired
    private TicketRepository ticketRepository;

    // Get all tickets
    public List<Ticket> getAllTickets() {
        return ticketRepository.findAll();
    }

    // Get a ticket by id
    public Optional<Ticket> getTicketById(String id) {
        return ticketRepository.findById(id);
    }

    // Add a new ticket
    public Ticket addTicket(Ticket ticket) {
        return ticketRepository.save(ticket);
    }

    // Update an existing ticket
//    public Ticket updateTicket(String id, Ticket ticket) {
//        if (ticketRepository.existsById(id)) {
//            ticket.setId(id);
//            return ticketRepository.save(ticket);
//        } else {
//            return null; // Or handle it as per your requirement
//        }
//    }

    // Delete a ticket
    public void deleteTicket(String id) {
        ticketRepository.deleteById(id);
    }
}
