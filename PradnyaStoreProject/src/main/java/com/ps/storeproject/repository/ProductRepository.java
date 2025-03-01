package com.ps.storeproject.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ps.storeproject.entity.Product;
@Repository
public interface ProductRepository extends JpaRepository<Product,Long> {

	List<Product> findByCategory(String category);

}
