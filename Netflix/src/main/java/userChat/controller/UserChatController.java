package userChat.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import userChat.bean.UserChatDTO;
import userChat.bean.UserChatRoomDTO;
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
	@PostMapping("/joinChatRoom")
	@ResponseBody
	public void joinChatRoom(@RequestParam Map<String,String> map) {
		userChatService.joinChatRoom(map);
	}
	@PostMapping("/getListChatRoom")
	@ResponseBody
	public List<UserChatRoomDTO> getListChatRoom(@RequestParam Map<String,String> map) {
		return userChatService.getListChatRoom(map);
	}
	@PostMapping("/sendChat")
	@ResponseBody
	public void sendChat(@RequestParam Map<String,String> map) {
		userChatService.sendChat(map);
	}
	@PostMapping("/getUserChatList")
	@ResponseBody
	public List<UserChatDTO> getUserChatList(@RequestParam Map<String,String> map) {
		return userChatService.getUserChatList(map);
	}
	@PostMapping("/gitChatRoomMakerList")
	@ResponseBody
	public List<UserChatRoomDTO>gitChatRoomMakerList(@RequestParam Map<String,String> map) {
		return userChatService.gitChatRoomMakerList(map);
	}
	@PostMapping("/creatorCheck")
	@ResponseBody
	public UserChatRoomDTO creatorCheck(@RequestParam Map<String,String> map) {
		return userChatService.creatorCheck(map);
	}
	@PostMapping("/updateChatRoom")
	@ResponseBody
	public void updateChatRoom(@RequestParam Map<String,String> map) {
		 userChatService.updateChatRoom(map);
	}
}
