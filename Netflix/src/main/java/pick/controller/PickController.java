package pick.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import pick.bean.PickDTO;
import pick.service.PickService;

@Controller
@CrossOrigin(origins = "http://localhost:3000")
public class PickController {
	
	@Autowired
	PickService pickService = null;
	
	@GetMapping("/pickUp")
	@ResponseBody
	public void pickUp() {
		pickService.pickUp(null);
	}
}
