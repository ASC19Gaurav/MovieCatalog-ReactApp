package com.sports.springboot.controller;

import com.sports.springboot.entity.Match;
import com.sports.springboot.service.MatchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/matches")
@CrossOrigin(origins = "http://localhost:4200")
public class MatchController {
    @Autowired
    private MatchService matchService;


    @GetMapping
    public List<Match> getAllUser(){
        return matchService.getAllMatches();
    }
    @PostMapping
    public Match createMatch(@RequestBody Match match){
        return matchService.createMatch(match);
    }

    @GetMapping("/unique-tournaments")
    public ResponseEntity<List<String>> getUniqueTournaments() {
        List<String> tournaments = matchService.getAllUniqueTournaments();
        return ResponseEntity.ok(tournaments);
    }

    @GetMapping("/tournament-matches")
    public  List<Match> getTournamentMatches(@RequestParam String tournamentName){
        return matchService.getTournamentMatches(tournamentName);
    }

    @DeleteMapping("/{id}")
    public Void deleteMatch(@PathVariable String id) {
        return matchService.deleteMatch(id);

    }
    @GetMapping("/{id}")
    public Match getMatchById(@PathVariable String id) {
        return matchService.getMatchById(id);
    }
    @PutMapping("/{id}")
    public Match updateMatch(@PathVariable String id, @RequestBody Match updatedMatch) {
        return matchService.updateMatch(id, updatedMatch);
    }
    @GetMapping("/search")
    public List<Match> searchMatch(@RequestParam String query) {
        return matchService.searchMatch(query);
    }

}
