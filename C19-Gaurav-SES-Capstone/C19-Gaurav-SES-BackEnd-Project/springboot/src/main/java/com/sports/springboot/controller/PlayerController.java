package com.sports.springboot.controller;
import com.sports.springboot.entity.Match;
import com.sports.springboot.entity.Player;
import com.sports.springboot.service.PlayerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/players")
@CrossOrigin(origins = "http://localhost:4200") // Allow Angular requests
public class PlayerController {

    @Autowired
    private PlayerService playerService;

    @GetMapping
    public List<Player> getAllPlayers() {
        return playerService.getAllPlayers();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Player> getPlayerById(@PathVariable String id) {
        Optional<Player> player = playerService.getPlayerById(id);
        if (player.isPresent()) {
            return ResponseEntity.ok(player.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public Player addPlayer(@RequestBody Player player) {
        return playerService.addPlayer(player);
    }

    @GetMapping("/team-Players")
    public List<Player> getTeamPlayers(@RequestParam String teamName) {
        return playerService.getTeamPlayers(teamName);
    }


    @PutMapping("/{id}")
    public Player updatePlayer(@PathVariable String id, @RequestBody Player updatedPlayer) {
        System.out.println("Updating player with ID: " + id);
        System.out.println("Updated Player Data: " + updatedPlayer);
        return playerService.updatePlayer(id, updatedPlayer);
    }


    @DeleteMapping("/{id}")
    public Void deleteTeams(@PathVariable String id) {
        return playerService.deleteTeams(id);

    }
}
