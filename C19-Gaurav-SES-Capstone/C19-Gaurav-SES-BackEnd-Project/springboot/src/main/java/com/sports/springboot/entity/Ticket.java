package com.sports.springboot.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;


@Entity
public class Ticket {

    @Id
    private String id;
    private String name;
    private int age;
    private String matchName;
    private int quantity;
    private String date;



    public Ticket() {}

    public Ticket(String id, String name, int age, String matchName, int quantity, String date) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.matchName = matchName;
        this.quantity = quantity;
        this.date = date;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getMatchName() {
        return matchName;
    }

    public void setMatchName(String matchName) {
        this.matchName = matchName;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }
}
