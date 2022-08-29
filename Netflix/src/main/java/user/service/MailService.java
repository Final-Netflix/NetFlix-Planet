package user.service;

import java.util.Map;

public interface MailService {
	public int sendSimpleMessage(Map<String,String> map);
	public int makeRandomNumber() ;
}
