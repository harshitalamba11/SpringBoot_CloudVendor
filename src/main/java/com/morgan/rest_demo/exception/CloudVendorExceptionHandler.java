package com.morgan.rest_demo.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class CloudVendorExceptionHandler {

    @ExceptionHandler(value = CloudVendorNotFound.class)
    public ResponseEntity<Object> handleCloudVendorNotFound(CloudVendorNotFound ex) {

        CloudVendorException exception = new CloudVendorException(
                ex.getMessage(),
                ex.getCause(),
                HttpStatus.NOT_ACCEPTABLE
        );

        return new ResponseEntity<>(exception, HttpStatus.NOT_FOUND);
    }
}
