package com.hgn.dsdeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hgn.dsdeliver.entities.Product;

public interface OrderRepository extends JpaRepository<Product, Long> {

}
