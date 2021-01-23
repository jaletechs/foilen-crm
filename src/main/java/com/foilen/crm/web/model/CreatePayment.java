/*
    Foilen CRM
    https://github.com/foilen/foilen-crm
    Copyright (c) 2015-2021 Foilen (https://foilen.com)

    The MIT License
    http://opensource.org/licenses/MIT

 */
package com.foilen.crm.web.model;

import com.foilen.smalltools.restapi.model.AbstractApiBase;

public class CreatePayment extends AbstractApiBase {

    private String clientShortName;

    private String date;
    private String paymentType;

    // 1099 for 10.99$
    private long price = 0;

    public String getClientShortName() {
        return clientShortName;
    }

    public String getDate() {
        return date;
    }

    public String getPaymentType() {
        return paymentType;
    }

    public long getPrice() {
        return price;
    }

    public CreatePayment setClientShortName(String clientShortName) {
        this.clientShortName = clientShortName;
        return this;
    }

    public CreatePayment setDate(String date) {
        this.date = date;
        return this;
    }

    public CreatePayment setPaymentType(String paymentType) {
        this.paymentType = paymentType;
        return this;
    }

    public CreatePayment setPrice(long price) {
        this.price = price;
        return this;
    }

}
