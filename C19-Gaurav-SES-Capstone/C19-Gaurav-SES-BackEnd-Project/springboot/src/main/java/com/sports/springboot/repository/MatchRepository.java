package com.sports.springboot.repository;

import com.sports.springboot.entity.Match;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface MatchRepository extends JpaRepository<Match,String> {
    @Query(value = "SELECT DISTINCT tournament_name FROM matches", nativeQuery = true)
    List<String> findAllUniqueTournaments();

    @Query(value = "SELECT * FROM matches WHERE tournament_name = ?1", nativeQuery = true)
    List<Match> findMatchesByTournament(String tournamentName);

    @Query(value = "SELECT * FROM matches WHERE LOWER(match_name) LIKE LOWER(CONCAT('%', :query, '%'))", nativeQuery = true)
    List<Match> findByNameContainingIgnoreCase(@Param("query") String query);


}
