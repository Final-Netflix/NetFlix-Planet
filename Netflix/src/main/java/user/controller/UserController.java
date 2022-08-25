package user.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import user.bean.UserDTO;
import user.bean.UserProfileDTO;

import user.send.Request;
import user.send.SmsResponse;
import user.send.SmsService;
import user.service.UserService;

@Controller
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
	@Autowired
	SmsService smsService;
	
	@Autowired
	UserService userService = null;
	
		
	@PostMapping("/send-sms")
	@ResponseBody
	public ResponseEntity<SmsResponse> sms_sends(@ModelAttribute Request request) throws Exception {
		System.out.println(request.getRecipientPhoneNumber());
		SmsResponse data = smsService.sendSms(request.getRecipientPhoneNumber(), request.getContent());
        return ResponseEntity.ok().body(data);
		
	}
	
	@PostMapping("/login")
	@ResponseBody
	public UserDTO login(@RequestParam Map<String,String> map) {
		return userService.login(map);
	}
	
	@PostMapping("/signUp")
	@ResponseBody
	public String signUp(@ModelAttribute UserDTO userDTO) {
		System.out.println(userDTO);
		String check = userService.signUp(userDTO);
		return check;
	}
	@PostMapping("/emailCheck")
	@ResponseBody
	public String emailCheck(@RequestParam String user_email) {
		
		return userService.emailCheck(user_email);
	}
	

	@PostMapping("/getProfileList")
	@ResponseBody
	public List<UserProfileDTO> getProfileList(@RequestParam Map<String,String> map) {
		return userService.getProfileList(map);
	}
	@PostMapping("/getProfile")
	@ResponseBody
	public UserProfileDTO getProfile(@RequestParam Map<String,String> map) {
		return userService.getProfile(map);
	}

	@PostMapping("/addProfile")
	@ResponseBody
	public UserProfileDTO addProfile(@RequestParam Map<String,String> map) {
		return userService.addProfile(map);
	}
}



