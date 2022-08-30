package user.dao;


import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import user.bean.UserDTO;
import user.bean.UserProfileDTO;


@Repository
@Transactional
public class UserDAOMybatis implements UserDAO {
	@Autowired
	private SqlSession sqlSession;
	
	@Override
	public UserDTO login(Map<String, String> map) {
		return sqlSession.selectOne("userSQL.login",map);
	}

	@Override

	public String signUpCheck(UserDTO userDTO) {
		return sqlSession.selectOne("userSQL.signUpCheck", userDTO);
	}

	@Override
	public void signUp(UserDTO userDTO) {
		sqlSession.insert("userSQL.signUp" , userDTO);
	}

	@Override
	public String emailCheck(String user_email) {
		return sqlSession.selectOne("userSQL.emailCheck", user_email);
	}

	public List<UserProfileDTO> getProfileList(Map<String, String> map) {
		return sqlSession.selectList("userSQL.getProfileList",map);
	}

	@Override
	public UserProfileDTO getProfile(Map<String, String> map) {
		return sqlSession.selectOne("userSQL.getProfile",map);
	}

	@Override
	public UserProfileDTO addProfile(Map<String, String> map) {
		sqlSession.insert("userSQL.addProfile",map);
		return sqlSession.selectOne("userSQL.getProfile",map);
	}

	@Override
	public int getProfileIdSeq() {
		return sqlSession.selectOne("userSQL.getProfileIdSeq");
	}

	@Override
	public void membershipUp(Map<String, String> map) {
		sqlSession.update("userSQL.membershipUp", map);
	}

	@Override
	public void insertBilling(Map<String, String> map) {
		sqlSession.insert("userSQL.insertBilling", map);
	}

	@Override
	public int getPayType() {
		return sqlSession.selectOne("userSQL.getPayType");
	}
	@Override
	public void deleteProfile(Map<String, String> map) {
		sqlSession.delete("userSQL.deleteProfile",map);
		
	}

	@Override
	public void updateProfile(Map<String, String> map) {
		sqlSession.delete("userSQL.updateProfile",map);
	}

	@Override
	public UserDTO getUSER(String user_email) {
		return sqlSession.selectOne("userSQL.getUSER" , user_email);
	}

	@Override
	public String priceMethod(String user_email) {
		return sqlSession.selectOne("userSQL.priceMethod" , user_email);
	}

	@Override
	public int getMembership(String user_email) {
		return sqlSession.selectOne("userSQL.getMembership", user_email); 
	}
	@Override
	public UserDTO findPwd(Map<String, String> map) {
		// TODO Auto-generated method stub
		return sqlSession.selectOne("userSQL.findPwd",map);
	}

	@Override
	public void updatePwd(Map<String, String> map) {
		sqlSession.update("userSQL.updatePwd",map);
		
	}

	@Override
	public List<UserDTO> findEmail(Map<String, String> map) {
		return sqlSession.selectList("userSQL.findEmail",map);
	}

	@Override
	public void myPageUpdatePwd(Map<String, String> map) {
		sqlSession.update("userSQL.myPageUpdatePwd", map);
		
	}

	@Override
	public List<UserDTO> findPassWord(Map<String, String> map) {
		return sqlSession.selectOne("userSQL.findPassWord",map);
	}

}
