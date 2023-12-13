package com.farmersMarket.spring.security;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.farmersMarket.spring.login.models.Product;
import com.farmersMarket.spring.login.models.ProductRepository;

import org.springframework.beans.factory.annotation.Autowired;

@SpringBootTest(classes = ProductRepository.class)
public class ProductRepositoryTests {

    @Autowired
    private ProductRepository productRepository;

    @MockBean
    private ProductRepository mockProductRepository;

    @Test
    public void testFindByProductId() {
        Long productId = 1L;
        Product product = new Product();
        product.setId(productId);

        when(mockProductRepository.findByProductId(productId)).thenReturn(Optional.of(product));
        Optional<Product> foundProduct = productRepository.findByProductId(productId);

        assertTrue(foundProduct.isPresent());
        assertEquals(productId, foundProduct.get().getId());
    }
}
