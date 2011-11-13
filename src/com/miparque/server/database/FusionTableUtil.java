package com.miparque.server.database;

/**
 * This would probably get refactored out in to some fustion table framework stuff. for now, the general
 * fusion table stuff that the dao classes need goes here
 * 
 * @author codersquid
 *
 */
public class FusionTableUtil {
    /**
     * @param value String to be persisted
     * @return value formatted for FusionTable insert sql
     */
    public static String nullSafeString(String value) {
        return value == null || value.isEmpty() ? "''" : "'" + value + "'";
    }
    /**
     * @param value number to be persisted
     * @return value formatted for FusionTable insert sql
     */
    public static String nullSafeNumber(Integer value) {
        return value == null ? "''" : value.toString();
    }
}
