package pick.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import pick.bean.PickDTO;
import pick.service.PickService;

@Controller
@CrossOrigin(origins = "http://localhost:3000")
public class PickController {
	
	@Autowired
	PickService pickService = null;
	
	@PostMapping("/addPickUp")
	@ResponseBody
	public void addPickUp(@ModelAttribute PickDTO pickDTO) {
		pickService.addPickUp(pickDTO);
	}
}
