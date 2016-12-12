package org.hisp.appstore.web;

import org.hibernate.SessionFactory;
import org.hisp.appstore.api.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by zubair on 10.12.16.
 */
@Controller
public class LoginController
{
    @Autowired
    private UserService userService;

    @Autowired
    private SessionFactory sessionFactory;

    @RequestMapping( value = "/login", method = RequestMethod.GET )
    public String loginPage( Model model )
    {
        return "login";
    }
}
