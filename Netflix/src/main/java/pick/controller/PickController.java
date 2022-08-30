package pick.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import pick.bean.PickDTO;
import pick.service.PickService;

@Controller
@CrossOrigin(origins = "http://localhost:3000")
public class PickController {
	
	@Autowired
	private PickService pickService = null;
	
	@PostMapping("/addPickUp")
	@ResponseBody
	public void addPickUp(@ModelAttribute PickDTO pickDTO) {
		pickService.addPickUp(pickDTO);
	}
	
	@PostMapping("/delPickUp")
	@ResponseBody
	public void delPickUp(@ModelAttribute PickDTO pickDTO) {
		pickService.delPickUp(pickDTO);
	}
	
	@PostMapping("getPickUp")
	@ResponseBody
	public String getPickUp(@ModelAttribute PickDTO pickDTO) {
		return pickService.getPickUp(pickDTO);
	}
}
