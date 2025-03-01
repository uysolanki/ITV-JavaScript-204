package com.ps.storeproject.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ps.storeproject.entity.Product;
import com.ps.storeproject.repository.ProductRepository;

@Service
public class ProductService {
	@Autowired
	private ProductRepository productRepository;
	
	public Product addProduct(Product product) {
		return productRepository.save(product);
	}

	public List<Product> addMultipleProducts(List<Product> products) {
		
		return productRepository.saveAll(products);
	}

	public  List<Product> getAllProducts() {
		// TODO Auto-generated method stub
		return productRepository.findAll();
	}

	public Product getById(long id) {
		// TODO Auto-generated method stub
		return productRepository.findById(id).get();
	}

	public List<Product> getByCategory(String category) {
		// TODO Auto-generated method stub
		return productRepository.findByCategory(category);
	}

	public void deleteProduct(long id) {
		Product product=this.getById(id);
		productRepository.delete(product);
		
	}

	public Product updateProduct(long id, Product product) {
		Product p = this.getById(id);
		p.setTitle(product.getTitle());
		p.setDescription(product.getDescription());
		p.setCategory(product.getCategory());
		p.setImage(product.getImage());
		p.setPrice(product.getPrice());
		p.setRating(product.getRating());
		
		return productRepository.save(p);
		
	}
	
	
}
