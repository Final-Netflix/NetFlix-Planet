package likes.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import likes.bean.LikesDTO;
import likes.service.LikesService;

@Controller
@CrossOrigin(origins = "http://localhost:3000")
public class LikesController {
	
	@Autowired
	private LikesService likesService;
	
	@PostMapping("/delLike")
	@ResponseBody
	public void delLike(@ModelAttribute LikesDTO likesDTO) {
		likesService.delLike(likesDTO);
	}
	
	@PostMapping("/addLike")
	@ResponseBody
	public void addLike(@ModelAttribute LikesDTO likesDTO) {
		likesService.addLike(likesDTO);
	}
	
	@PostMapping("/getLike")
	@ResponseBody
	public int getLike(@ModelAttribute LikesDTO likesDTO) {
		return likesService.getLike(likesDTO);
	}
}
