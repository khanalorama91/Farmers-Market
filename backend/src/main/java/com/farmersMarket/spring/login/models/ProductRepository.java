package com.farmersMarket.spring.login.models;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;




public interface ProductRepository extends JpaRepository<Product, Long> {

   Optional<Product> findByProductId( Long id);
}
