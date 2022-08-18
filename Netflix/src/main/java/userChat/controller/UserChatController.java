package userChat.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import userChat.service.UserChatService;

@Controller
@CrossOrigin(origins = "http://localhost:3000")
public class UserChatController {
	@Autowired
	UserChatService userChatService = null;
	
	@PostMapping("/createChatRoom")
	@ResponseBody
	public void createChatRoom(@RequestParam Map<String,String> map) {
		userChatService.createChatRoom(map);
	}
	@PostMapping("/joinChatjoinChatRoom")
	@ResponseBody
	public void joinChatRoom(@RequestParam Map<String,String> map) {
		//userChatService.joinChatRoom(map);
	}
	
	
}
