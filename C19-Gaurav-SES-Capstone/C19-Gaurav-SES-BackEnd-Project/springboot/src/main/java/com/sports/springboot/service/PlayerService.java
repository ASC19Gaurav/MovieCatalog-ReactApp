package com.sports.springboot.service;

import com.sports.springboot.entity.Player;
import com.sports.springboot.repository.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PlayerService {

    @Autowired
    private PlayerRepository playerRepository;

    public List<Player> getAllPlayers() {
        return playerRepository.findAll();
    }

    public Optional<Player> getPlayerById(String id) {
        return playerRepository.findById(id);
    }

    public Player addPlayer(Player player) {
        return playerRepository.save(player);
    }
    public List<Player> getTeamPlayers(String teamName){
        return playerRepository.findPlayersByteam(teamName);
    }


    public Void deleteTeams(String id) {
        playerRepository.deleteById(id);
        return null;
    }

    public Player updatePlayer(String id, Player updatedPlayer) {
        return playerRepository.findById(id).map(existingPlayer -> {
            existingPlayer.setPlayerName(updatedPlayer.getPlayerName());
            existingPlayer.setPlayerAge(updatedPlayer.getPlayerAge());
            existingPlayer.setTeamName(updatedPlayer.getTeamName());
            existingPlayer.setPhoneNo(updatedPlayer.getPhoneNo());
            return playerRepository.save(existingPlayer);
        }).orElseThrow(() -> new RuntimeException("Player not found with id: " + id));
    }

}