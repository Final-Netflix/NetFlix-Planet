package watch.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import watch.bean.WatchDTO;
import watch.service.WatchService;

@Controller
@CrossOrigin(origins = "http://localhost:3000")
public class WatchController {
	@Autowired
	WatchService watchService = null;
	
	@PostMapping("/addWatches")
//	@GetMapping("addWatches")
	@ResponseBody
	public void addWatches(@ModelAttribute WatchDTO watchDTO) {
		watchService.addWatches(watchDTO);
	}
}
