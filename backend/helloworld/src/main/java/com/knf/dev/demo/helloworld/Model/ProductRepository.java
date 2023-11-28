package com.knf.dev.demo.helloworld.Model;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;




public interface ProductRepository extends JpaRepository<Product, Long> {

   Optional<Product> findByCategoryId( Long id);
}
