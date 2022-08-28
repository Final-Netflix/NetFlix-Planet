package user.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
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
	
	@PostMapping("/insertSubscribe")
	@ResponseBody
	public void insertSubscribe(@RequestParam Map<String, String> map) {
		userService.insertSubscribe(map);
	}
 

	@PostMapping("/deleteProfile")
	@ResponseBody
	public void deleteProfile(@RequestParam Map<String,String> map) {
		userService.deleteProfile(map);
	}
	@PostMapping("/updateProfile")
	@ResponseBody
	public void updateProfile(@RequestParam Map<String,String> map) {
		userService.updateProfile(map);
	}
	
	@PostMapping("/getInfo")
	@ResponseBody
	public Map<String, String> getInfo(@RequestParam String user_email) {
		
		//계정 정보 불러오기
		Map<String , String> map = userService.getUSER(user_email);
		//결제 정보 불러오기 
		String priceMethod = userService.priceMethod(user_email);
	//	map.put("priceMethod", priceMethod);
		//멤버십 정보 불러오기
		System.out.println(map);
	//	int i = userService.getMembership(user_email);
	//	System.out.println(i);
//		if(i==1) {
//			map.put("membership", "베이식");
//		}else if(i==2) {
//			map.put("membership", "스탠다드");
//		}else{
//			map.put("membership", "프리미엄");
//		}
		return map;
	}
	
	
	
}




