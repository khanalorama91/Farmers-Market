//package com.farmersMarket.spring.security;
//
//import static org.assertj.core.api.Assertions.assertThat;
//
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
//import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
//import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
//import org.springframework.test.annotation.Rollback;
//import org.springframework.test.context.ContextConfiguration;
//
//import com.farmersMarket.spring.login.FarmersMarketApplication;
//import com.farmersMarket.spring.login.models.Product;
//import com.farmersMarket.spring.login.models.ProductRepository;
//
//
//@DataJpaTest
//@AutoConfigureTestDatabase(replace = Replace.NONE)
//@Rollback(false)
//@ContextConfiguration(classes = FarmersMarketApplication.class)
//public class ProductRepositoryTests {
//
//	@Autowired
//	private ProductRepository repo;
//	
//	
//	
//	@Test
//	public void testListAllProducts() {
//		Iterable<Product> iterableProducts = repo.findAll();
//		
//		iterableProducts.forEach(System.out::println);
//	}
//	
//	@Test
//	public void testGetProduct() {
//		Integer id = 2;
//		Product product = repo.findAll().get(id);
//		System.out.println(product);
//		
//		assertThat(product).isNotNull();
//	}
//
//}
