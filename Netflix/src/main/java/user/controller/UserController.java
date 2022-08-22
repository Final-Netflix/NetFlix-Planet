package user.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import user.service.UserService;

@Controller
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
	@Autowired
	UserService userService = null;
	
	@PostMapping("/login")
	@ResponseBody
	public boolean login(@RequestParam Map<String,String> map) {
		System.out.println("1"+map);
		//System.out.println("3"+userService.login(map));
		return userService.login(map);
	}
}
