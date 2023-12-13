package com.farmersMarket.spring.login.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.farmersMarket.spring.login.models.Product;

@RestController
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping("/products")
    public Iterable<Product> list() {
        return productService.listAllProducts();
    }

    @GetMapping("/product/{id}")
    public Product showProduct(@PathVariable Integer id) {
        return productService.getProductById(id);
    }
}
