package com.foilen.crm.web.model;

import com.foilen.smalltools.tools.PriceFormatTools;

public class CreateTechnicalSupport {

    private String sid;
    private long pricePerHour;

    public long getPricePerHour() {
        return pricePerHour;
    }

    public String getPricePerHourFormatted() {
        return PriceFormatTools.toDigit(pricePerHour);
    }

    public String getSid() {
        return sid;
    }

    public void setPricePerHour(long pricePerHour) {
        this.pricePerHour = pricePerHour;
    }

    public void setSid(String sid) {
        this.sid = sid;
    }
}