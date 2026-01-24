package com.morgan.rest_demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.morgan.rest_demo.model.CloudVendor;

public interface CloudVendorRepo extends JpaRepository<CloudVendor,String>{

}
