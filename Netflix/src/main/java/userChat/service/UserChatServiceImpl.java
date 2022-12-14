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
		
		String chatRoomSeq = userChatDAO.chatRoomSeq();

		if(chatRoomSeq == null) {
			chatRoomSeq = "1";
		}else {
			chatRoomSeq= Integer.parseInt(chatRoomSeq)+1 +"";
		}
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
		String chatSeq = userChatDAO.chatSeq();
		if(chatSeq ==null) {
			chatSeq = "1";
		}else {
			chatSeq = Integer.parseInt(chatSeq)+1+"";
		}
		map.put("seq",chatSeq+"");
		userChatDAO.sendChat(map);
		
	}

	@Override
	public List<UserChatDTO> getUserChatList(Map<String, String> map) {
		return userChatDAO.getUserChatList(map);
	}

	@Override
	public List<UserChatRoomDTO> gitChatRoomMakerList(Map<String, String> map) {
		return userChatDAO.gitChatRoomMakerList(map);
	}

	@Override
	public UserChatRoomDTO creatorCheck(Map<String, String> map) {
		// TODO Auto-generated method stub
		return userChatDAO.creatorCheck(map);
	}

	@Override
	public void updateChatRoom(Map<String, String> map) {
		userChatDAO.updateChatRoom(map);
		
	}


}
