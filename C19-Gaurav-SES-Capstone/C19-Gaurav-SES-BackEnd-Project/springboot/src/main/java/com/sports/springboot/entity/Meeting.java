package com.sports.springboot.entity;

import jakarta.persistence.ElementCollection;
import jakarta.persistence.Id;

import java.util.List;

public class Meeting {

    @Id
    private String id;  // Custom or UUID string-based identifier

    private String date;
    private String startTime;
    private String endTime;
    private String description;

    @ElementCollection
    private List<String> attendees;

    public Meeting() {
    }

    public Meeting(String id, String date, String startTime, String endTime, String description, List<String> attendees) {
        this.id = id;
        this.date = date;
        this.startTime = startTime;
        this.endTime = endTime;
        this.description = description;
        this.attendees = attendees;
    }

    // Getters and Setters

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public String getEndTime() {
        return endTime;
    }

    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<String> getAttendees() {
        return attendees;
    }

    public void setAttendees(List<String> attendees) {
        this.attendees = attendees;
    }
}
