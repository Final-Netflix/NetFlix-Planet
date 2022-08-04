package test.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import test.service.TestService;

@Controller
public class TestController {
	
	@Autowired
	private TestService testService = null;
	
	@GetMapping("/hello")
	@ResponseBody
	public String test() {
		String test = testService.getTest();
//		System.out.println(test);
		return "Hello, World!";
	}
}
