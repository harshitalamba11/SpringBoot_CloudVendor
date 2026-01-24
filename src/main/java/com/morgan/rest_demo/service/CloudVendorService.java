package com.morgan.rest_demo.service;

import com.morgan.rest_demo.model.CloudVendor;

public interface CloudVendorService {
    public String createCloudVendor(CloudVendor cloudVendor);
    public String updateCloudVendor(CloudVendor cloudVendor);
    public String deleteCloudVendor(String VendorId);
    public CloudVendor getCloudVendor(String VendorId);
}