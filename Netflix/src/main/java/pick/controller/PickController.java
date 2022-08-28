package pick.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;

import pick.bean.PickDTO;
import pick.service.PickService;

@Controller
@CrossOrigin(origins = "http://localhost:3000")
public class PickController {
	
	@Autowired
	PickService pickService = null;
	
	public void pickUp(@ModelAttribute PickDTO pickDTO) {
		System.out.println(pickDTO);
		pickService.pickUp(pickDTO);
	}
}
