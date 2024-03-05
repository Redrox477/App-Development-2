package com.giftvibes.monish.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.giftvibes.monish.Models.Order;
import com.giftvibes.monish.Repository.OrderRepository;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;


@RestController
@RequiredArgsConstructor
@Tag(name="OrderController")


public class OrderController {

    @Autowired
    OrderRepository orderRepository ;

    @PostMapping("/order")
    public String addOrder(@RequestBody Order order) {
        orderRepository.save(order) ;
        return "Order Created Succesfully" ;
    }
    
    @GetMapping("/g/ord/{id}")
    public List<Order> getorder(@PathVariable String id) {
        return orderRepository.findByOrdId(id);  
    }

}
