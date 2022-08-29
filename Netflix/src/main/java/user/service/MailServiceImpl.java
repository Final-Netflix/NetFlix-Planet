package user.service;

import java.util.Map;
import java.util.Random;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;



@Service
@AllArgsConstructor
public class MailServiceImpl implements MailService{
	

	 private JavaMailSender emailSender;
	 
    public int sendSimpleMessage(Map<String,String> map) {
    	int checkNum = this.makeRandomNumber();
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("whcute@gmail.com");
        message.setTo(map.get("user_email"));
        message.setSubject("Planet 비밀번호 찾기 인증번호 입니다");
        
        message.setText("인증번호는 " + checkNum +"를 홈페이지에 입력하시면 비밀번호를 변경하실 수 있습니다.");
        emailSender.send(message);
        return checkNum;
    }
    
	public int makeRandomNumber() {
		// 난수의 범위 111111 ~ 999999 (6자리 난수)
		Random r = new Random();
		int checkNum = r.nextInt(888888) + 111111;
		System.out.println("비번찾기 인증번호 : " + checkNum);
		return checkNum;
	}

}
