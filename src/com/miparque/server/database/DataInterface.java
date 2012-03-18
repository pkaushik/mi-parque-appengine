package com.miparque.server.database;

/**
 * Defines the interface that persistence providers will need to follow when implementing data access for DAO
 * 
 * TODO: still figuring out interface
 * TODO: exceptions for interface
 * 
 * @author codersquid
 *
 * @param <E> dao entity that is being persisted
 * @param <K> key to uniquely identify entity
 */
public interface DataInterface<E,K> {
    public E getById(K key);
    public void update(E entity);
    public K create(E entity);
}
