package com.miparque.server;

/**
 * Thrown when resources are not found. For example, when Poll 123 is not found, this exception should be thrown.
 * 
 * @author codersquid
 */
public class ResourceNotFoundException extends Exception {
    private static final long serialVersionUID = 1L;

    public ResourceNotFoundException(String message) {
        super(message);
    }
    public ResourceNotFoundException(String message, Throwable t) {
        super(message, t);
    }
}
