package com.sports.springboot.repository;

import com.sports.springboot.entity.Meeting;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MeetingRepository extends JpaRepository<Meeting,String> {
}
