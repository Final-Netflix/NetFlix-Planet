package userChat.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import userChat.bean.UserChatDTO;
import userChat.bean.UserChatRoomDTO;
import userChat.dao.UserChatDAO;

@Service
public class UserChatServiceImpl implements UserChatService {
	@Autowired
	UserChatDAO userChatDAO = null;
	
	@Override
	public void createChatRoom(Map<String,String> map) {
		int chatRoomSeq = userChatDAO.chatRoomSeq()+1;
		map.put("seq",chatRoomSeq+"");
		
		userChatDAO.createChatRoom(map);
	}

	@Override
	public void joinChatRoom(Map<String, String> map) {
		map.put("chat_room_id", userChatDAO.getChatRoomId(map));
		userChatDAO.joinChatRoom(map);
	}

	@Override
	public List<UserChatRoomDTO> getListChatRoom(Map<String, String> map) {
		
		return userChatDAO.getListChatRoom(map);
	}

	@Override
	public void sendChat(Map<String, String> map) {
		int chatSeq = userChatDAO.chatSeq()+1;
		
		map.put("seq",chatSeq+"");
		userChatDAO.sendChat(map);
		
	}

	@Override
	public List<UserChatDTO> getUserChatList(Map<String, String> map) {
		return userChatDAO.getUserChatList(map);
	}


}
