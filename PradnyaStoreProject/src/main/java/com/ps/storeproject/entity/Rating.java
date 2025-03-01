package com.ps.storeproject.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Rating {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
	private double rate;
    private long count;

    
    public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public double getRate() { 
		return rate; 
		}
    public void setRate(double value) {
    	this.rate = value; 
    	}

    public long getCount() { 
    	return count; 
    	}
    public void setCount(long value) { 
    	this.count = value;
    	}

}
