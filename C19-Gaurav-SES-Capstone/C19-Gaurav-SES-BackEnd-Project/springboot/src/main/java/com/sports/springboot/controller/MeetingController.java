package com.sports.springboot.controller;

import com.sports.springboot.entity.Meeting;
import com.sports.springboot.service.MeetingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/api/meeting")
@CrossOrigin(origins = "http://localhost:4200")
public class MeetingController {
    @Autowired
    private MeetingService meetingService;

    @GetMapping
    public List<Meeting> getAllMeeting(){
        return meetingService.getAllMeetings();
    }

    @PostMapping
    public Meeting createMeeting(@RequestBody Meeting meeting){
        return meetingService.createMeeting(meeting);
    }

}
