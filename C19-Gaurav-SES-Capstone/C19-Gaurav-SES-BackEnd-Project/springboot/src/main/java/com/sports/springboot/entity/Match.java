package com.sports.springboot.entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Matches")
public class Match {

    @Id
    private String id;

    @Column(name = "matchName")
    private String matchName;
    private String matchDate;
    private String matchLocation;
    private String team1Name;
    private String team2Name;
    private String tournamentName;

    public Match() {
    }

    public Match(String id, String matchName, String matchDate, String matchLocation,
                 String team1Name, String team2Name, String tournamentName) {

        this.id = id;
        this.matchName = matchName;
        this.matchDate = matchDate;
        this.matchLocation = matchLocation;
        this.team1Name = team1Name;
        this.team2Name = team2Name;
        this.tournamentName = tournamentName;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getmatchName() {
        return matchName;
    }

    public void setmatchName(String matchName) {
        this.matchName = matchName;
    }

    public String getMatchDate() {
        return matchDate;
    }

    public void setMatchDate(String matchDate) {
        this.matchDate = matchDate;
    }

    public String getMatchLocation() {
        return matchLocation;
    }

    public void setMatchLocation(String matchLocation) {
        this.matchLocation = matchLocation;
    }

    public String getTeam1Name() {
        return team1Name;
    }

    public void setTeam1Name(String team1Name) {
        this.team1Name = team1Name;
    }

    public String getTeam2Name() {
        return team2Name;
    }

    public void setTeam2Name(String team2Name) {
        this.team2Name = team2Name;
    }

    public String getTournamentName() {
        return tournamentName;
    }

    public void setTournamentName(String tournamentName) {
        this.tournamentName = tournamentName;
    }


}
