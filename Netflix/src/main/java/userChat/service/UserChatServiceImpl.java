package userChat.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import userChat.dao.UserChatDAO;

@Service
public class UserChatServiceImpl implements UserChatService {
	@Autowired
	UserChatDAO userChatDAO = null;
	
	@Override
	public void createChatRoom(Map<String,String> map) {
		userChatDAO.createChatRoom(map);

	}

}
