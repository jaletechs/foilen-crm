/*
    Foilen CRM
    https://github.com/foilen/foilen-crm
    Copyright (c) 2015-2021 Foilen (https://foilen.com)

    The MIT License
    http://opensource.org/licenses/MIT

 */
package com.foilen.crm.localonly;

import com.foilen.smalltools.email.EmailBuilder;
import com.foilen.smalltools.email.EmailService;
import com.foilen.smalltools.tools.AbstractBasics;

public class EmailServiceMock extends AbstractBasics implements EmailService {

    @Override
    public void sendEmail(EmailBuilder emailBuilder) {
        sendHtmlEmail(emailBuilder.getFrom(), emailBuilder.getTos().toString(), emailBuilder.getSubject(), emailBuilder.getBody());
    }

    @Override
    public void sendHtmlEmail(String from, String to, String subject, String html) {
        logger.info("Sending email: {} -> {} | {} | {}", from, to, subject, html);
    }

    @Override
    public void sendTextEmail(String from, String to, String subject, String text) {
        logger.info("Sending email: {} -> {} | {} | {}", from, to, subject, text);
    }

}
