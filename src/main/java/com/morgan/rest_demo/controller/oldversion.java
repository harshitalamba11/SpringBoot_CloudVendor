
// package com.morgan.rest_demo.controller;

// import org.springframework.web.bind.annotation.DeleteMapping;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.PutMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// import com.morgan.rest_demo.model.CloudVendor;



// @RestController
// @RequestMapping("/CloudVendor")

// public class oldversion {
//     CloudVendor cloudVendor;
//     @GetMapping("{vendorId}")
//     public CloudVendor getCloudVendorDetails(
//             @PathVariable String vendorId) {

//         return new CloudVendor(
//                 "C1",
//                 "Vendor01",
//                 "Address-01",
//                 "xxxxx"
//         );
//     }

//     @PostMapping
//     public String createCloudVendor(@RequestBody CloudVendor cloudVendor){
//         this.cloudVendor=cloudVendor;
//         return "Cloud Vendor Created Successfully!";
//     }

//     @PutMapping
//     public String putMethodName(@RequestBody CloudVendor cloudVendor) {
//         this.cloudVendor=cloudVendor;
//         return "Cloud Vendor Updated Successfully!";
//     }

//     @DeleteMapping("{vendorId}")
//     public String deleteMethod(String vendorId){
//         return "Cloud Vendor Deleted Successfully!";
//     }
// }