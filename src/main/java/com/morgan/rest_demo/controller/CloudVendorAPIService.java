package com.morgan.rest_demo.controller;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.morgan.rest_demo.Response;
import com.morgan.rest_demo.model.CloudVendor;
import com.morgan.rest_demo.service.CloudVendorService;


@RestController
@RequestMapping("/CloudVendor")

public class CloudVendorAPIService {
    CloudVendorService Service;

    public CloudVendorAPIService(CloudVendorService Service){
        this.Service=Service;
    }

    @GetMapping("{vendorId}")
    public ResponseEntity<Object> getCloudVendorDetails(
            @PathVariable String vendorId) {
            return Response.responseBuilder("Requested Vendor Details",HttpStatus.OK,Service.getCloudVendor(vendorId));
            // return Service.getCloudVendor(vendorId);
    }

    @PostMapping
    public String createCloudVendor(@RequestBody CloudVendor cloudVendor){
        return Service.createCloudVendor(cloudVendor);
    }

    @PutMapping
    public String putMethodName(@RequestBody CloudVendor cloudVendor){
        return Service.updateCloudVendor(cloudVendor);
    }

    @DeleteMapping("{vendorId}")
    public String deleteMethod(@PathVariable String vendorId){
        return Service.deleteCloudVendor(vendorId);
    }

    @GetMapping
    public Set<Object> getAllDetails(){
        return Service.getAllCloudVendors();
    }
}