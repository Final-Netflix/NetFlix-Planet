package user.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import user.send.Request;
import user.send.SmsResponse;
import user.send.SmsService;

@Controller
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
	@Autowired
	SmsService smsService;
	
		
	@PostMapping("/kingkong")
	@ResponseBody
	public ResponseEntity<SmsResponse> sms_sends(@ModelAttribute Request request) throws Exception {
		System.out.println(request.getRecipientPhoneNumber());
		SmsResponse data = smsService.sendSms(request.getRecipientPhoneNumber(), request.getContent());
        return ResponseEntity.ok().body(data);
		
	}
}
