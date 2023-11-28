package com.knf.dev.demo.helloworld.Model;
	
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import java.math.BigDecimal;

	@Entity
	@Table(name="product")
	public class Product {
		@Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    @Column(name = "id")
	    private Long id;

	    @ManyToOne
	    @JoinColumn(name = "category_id", nullable = false)
	    private ProductCategory category;


	    @Column(name = "name")
	    private String name;

	    @Column(name = "description")
	    private String description;

	    @Column(name = "unit_price")
	    private BigDecimal unitPrice;

	    @Column(name = "image_url")
	    private String imageUrl;

	    @Column(name = "units_in_stock")
	    private int unitsInStock;

	    public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}

		public ProductCategory getCategory() {
			return category;
		}

		public void setCategory(ProductCategory category) {
			this.category = category;
		}

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}

		public String getDescription() {
			return description;
		}

		public void setDescription(String description) {
			this.description = description;
		}

		public BigDecimal getUnitPrice() {
			return unitPrice;
		}

		public void setUnitPrice(BigDecimal unitPrice) {
			this.unitPrice = unitPrice;
		}

		public String getImageUrl() {
			return imageUrl;
		}

		public void setImageUrl(String imageUrl) {
			this.imageUrl = imageUrl;
		}

		public int getUnitsInStock() {
			return unitsInStock;
		}

		public void setUnitsInStock(int unitsInStock) {
			this.unitsInStock = unitsInStock;
		}

		
	 

}
