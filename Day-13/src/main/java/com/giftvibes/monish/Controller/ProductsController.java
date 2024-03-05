package com.giftvibes.monish.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.giftvibes.monish.Models.Products;
import com.giftvibes.monish.Repository.ProductsRepository;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@Tag(name="ProductsController")
public class ProductsController {

    @Autowired
    ProductsRepository productsRepository ;

    @PostMapping("/products")
    public String addProducts(@RequestBody Products products) {
        productsRepository.save(products) ;
        return "Products added successfully" ;
    }

    @DeleteMapping("/Products/delete/{id}")
    public String delProducts(@PathVariable String id){
        productsRepository.deleteById(id);
        return "Product deleted successfully" ;
    }

}
