package com.sports.springboot.service;

import com.sports.springboot.entity.Match;
import com.sports.springboot.repository.MatchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
@Service
public class MatchService {

    @Autowired
    private MatchRepository matchRepository;

    public List<Match> getAllMatches(){
        return matchRepository.findAll();

    }
    public  Match createMatch(Match match){
        return matchRepository.save(match);
    }

    public List<String> getAllUniqueTournaments() {
        return matchRepository.findAllUniqueTournaments();
    }

    public List<Match> getTournamentMatches(String tournamentName){
        return matchRepository.findMatchesByTournament(tournamentName);
    }

    public Void deleteMatch(String id) {
        matchRepository.deleteById(id);
        return null;
    }


    public Match getMatchById(String matchId) {
        return matchRepository.findById(matchId)
                .orElseThrow(() -> new RuntimeException("Match not found with id: " + matchId));
    }
    public Match updateMatch(String id, Match updatedMatch) {
        updatedMatch.setId(id); // Ensure the ID is set
        return matchRepository.save(updatedMatch); // Save and update the match
    }

    public List<Match> searchMatch(String query) {
        return matchRepository.findByNameContainingIgnoreCase(query);
    }


}
