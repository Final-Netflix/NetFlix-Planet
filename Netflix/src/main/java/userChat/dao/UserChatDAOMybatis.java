package userChat.dao;

import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public class UserChatDAOMybatis implements UserChatDAO {
	
	@Autowired
	private SqlSession sqlSession;
	
	@Override
	public void createChatRoom(Map<String, String> map) {
		sqlSession.insert("userChatSQL.createChatRoom",map);
	}

}
