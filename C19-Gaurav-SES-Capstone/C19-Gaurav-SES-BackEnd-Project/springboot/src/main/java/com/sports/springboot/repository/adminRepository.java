package com.sports.springboot.repository;

import com.sports.springboot.entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface adminRepository extends  JpaRepository <Admin, String>  {
}
