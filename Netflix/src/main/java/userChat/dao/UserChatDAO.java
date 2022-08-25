package userChat.dao;

import java.util.List;
import java.util.Map;

import userChat.bean.UserChatDTO;
import userChat.bean.UserChatRoomDTO;

public interface UserChatDAO {

	public void createChatRoom(Map<String, String> map);

	public void joinChatRoom(Map<String, String> map);

	public String getChatRoomId(Map<String, String> map);

	public List<UserChatRoomDTO> getListChatRoom(Map<String, String> map);

	public int chatRoomSeq();
	
	public int chatSeq();

	public void sendChat(Map<String, String> map);

	public List<UserChatDTO> getUserChatList(Map<String, String> map);

	public List<UserChatRoomDTO> gitChatRoomMakerList(Map<String, String> map);
}
