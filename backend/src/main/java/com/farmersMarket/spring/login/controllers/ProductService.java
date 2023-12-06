package com.farmersMarket.spring.login.controllers;

import com.farmersMarket.spring.login.models.Product;

public interface ProductService {
	Iterable<Product> listAllProducts();

	Product getProductById(Integer id);

	
}