package com.knf.dev.demo.helloworld.Model;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;





public interface ProductCategoryRepository extends JpaRepository<ProductCategory, Long> {
	 Optional<ProductCategory> ListByCategoryId( Long id);
}

