package com.sports.springboot.repository;


import com.sports.springboot.entity.Match;
import com.sports.springboot.entity.Player;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlayerRepository extends JpaRepository<Player, String> {
    @Query(value = "SELECT * FROM players WHERE team_name = ?1", nativeQuery = true)
    List<Player> findPlayersByteam(String teamName);
}
