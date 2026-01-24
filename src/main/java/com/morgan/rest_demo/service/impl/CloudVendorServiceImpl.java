package com.morgan.rest_demo.service.impl;

import org.springframework.stereotype.Service;

import com.morgan.rest_demo.exception.CloudVendorNotFound;
import com.morgan.rest_demo.model.CloudVendor;
import com.morgan.rest_demo.repository.CloudVendorRepo;
import com.morgan.rest_demo.service.CloudVendorService;

@Service
public class CloudVendorServiceImpl implements CloudVendorService{
    CloudVendorRepo Repo;
    public CloudVendorServiceImpl(CloudVendorRepo Repo){
        this.Repo=Repo;
    }

    @Override
    public String createCloudVendor(CloudVendor cloudVendor){
        Repo.save(cloudVendor);
        return "Registered the Entry";
    }
    
    @Override
    public String deleteCloudVendor(String VendorId){
        Repo.deleteById(VendorId);
        return "Deleted the Entry!!";
    }

    @Override
    public String updateCloudVendor(CloudVendor cloudVendor){
        Repo.save(cloudVendor);
        return "Updated the Entry!!";
    }

    @Override
    public CloudVendor getCloudVendor(String VendorId){
        if(Repo.findById(VendorId).isEmpty()){
            throw new CloudVendorNotFound("Requested CloudVendor does not exist!");
        }
        return Repo.findById(VendorId).get();
    }
}
