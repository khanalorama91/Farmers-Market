package com.knf.dev.demo.helloworld.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String userName;
    private String password;

    // Getters and setters
    public long getId() {
    	return this.id;
    }
    
    public String getUserName() {
    	return this.userName;
    }
    
    public String getPassword() {
    	return this.password;
    }
    
    public void setId(long id) {
    	this.id = id;
    }
    
    public void setUserName(String username) {
    	this.userName = username;
    }
    
    public void setPassword(String password) {
    	this.password = password;
    }
}
