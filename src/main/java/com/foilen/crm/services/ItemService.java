/*
    Foilen CRM
    https://github.com/foilen/foilen-crm
    Copyright (c) 2015-2019 Foilen (http://foilen.com)

    The MIT License
    http://opensource.org/licenses/MIT

 */
package com.foilen.crm.services;

import com.foilen.crm.web.model.CreateItem;
import com.foilen.crm.web.model.ItemList;
import com.foilen.smalltools.restapi.model.FormResult;

public interface ItemService {

    FormResult billPending(String userId, String invoicePrefix);

    FormResult create(String userId, CreateItem form);

    /**
     * Get the list of items that were billed.
     *
     * @param userId
     *            the user that wants the list
     * @param pageId
     *            the page id starting at 1
     * @return the list of items
     */
    ItemList listBilled(String userId, int pageId);

    /**
     * Get the list of items that are not billed yet.
     *
     * @param userId
     *            the user that wants the list
     * @param pageId
     *            the page id starting at 1
     * @return the list of items
     */
    ItemList listPending(String userId, int pageId);

}