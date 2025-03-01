package com.ps.storeproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ps.storeproject.entity.Rating;
@Repository
public interface RatingRepository extends JpaRepository<Rating, Long> {

}
