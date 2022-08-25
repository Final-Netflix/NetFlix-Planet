package userChat.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import userChat.bean.UserChatDTO;
import userChat.bean.UserChatRoomDTO;

@Repository
@Transactional
public class UserChatDAOMybatis implements UserChatDAO {
	
	@Autowired
	private SqlSession sqlSession;
	
	@Override
	public void createChatRoom(Map<String, String> map) {
		sqlSession.insert("userChatSQL.createChatRoom",map);
		map.put("chat_room_id", this.getChatRoomId(map));
		sqlSession.insert("userChatSQL.joinChatRoom",map);
	}

	@Override
	public void joinChatRoom(Map<String, String> map) {
		sqlSession.insert("userChatSQL.joinChatRoom",map);
	}

	@Override
	public String getChatRoomId(Map<String, String> map) {
		return sqlSession.selectOne("userChatSQL.getChatRoomId",map);
	}

	@Override
	public List<UserChatRoomDTO> getListChatRoom(Map<String, String> map) {
		return sqlSession.selectList("userChatSQL.getListChatRoom",map);
	}

	@Override
	public int chatRoomSeq() {
		return sqlSession.selectOne("userChatSQL.chatRoomSeq");
	}
	@Override
	public int chatSeq() {
		return sqlSession.selectOne("userChatSQL.chatSeq");
	}

	@Override
	public void sendChat(Map<String, String> map) {
		sqlSession.insert("userChatSQL.sendChat",map);
	}

	@Override
	public List<UserChatDTO> getUserChatList(Map<String, String> map) {
		return sqlSession.selectList("userChatSQL.getUserChatList",map);
	}

	@Override
	public List<UserChatRoomDTO> gitChatRoomMakerList(Map<String, String> map) {
		
		return sqlSession.selectList("userChatSQL.gitChatRoomMakerList",map);
	}

}
