package com.knf.dev.demo.helloworld.controller;

import com.knf.dev.demo.helloworld.Model.Product;

public interface ProductService {
	Iterable<Product> listAllProducts();

	Product getProductById(Integer id);

	
}