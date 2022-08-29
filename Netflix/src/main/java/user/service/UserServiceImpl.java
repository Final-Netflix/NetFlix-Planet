package user.service;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.mail.javamail.JavaMailSender;

import user.bean.UserDTO;

import user.bean.UserProfileDTO;
import user.dao.UserDAO;

@Service
public class UserServiceImpl implements UserService {
	@Autowired
	UserDAO userDAO = null;
	@Autowired
	private HttpSession session;
	@Autowired
	JavaMailSender mailSender;
    
	@Override
	public UserDTO login(Map<String, String> map) {
		UserDTO userDTO = new UserDTO();
		session.setAttribute("user_email",userDTO.getUser_email());
		return userDAO.login(map);
	}

	@Override
	public List<UserProfileDTO> getProfileList(Map<String, String> map) {
		return userDAO.getProfileList(map);
	}

	@Override
	public UserProfileDTO getProfile(Map<String, String> map) {
		return userDAO.getProfile(map);
	}

	@Override
	public UserProfileDTO addProfile(Map<String, String> map) {
		int seq = userDAO.getProfileIdSeq()+1;
		map.put("profile_id", seq+"");
		return userDAO.addProfile(map);
  }

	public String signUp(UserDTO userDTO) {
		String check = userDAO.signUpCheck(userDTO);
		System.out.println(check);
		if(check.equals("0")) {
			userDAO.signUp(userDTO);
			return "0";
		}else {
			return "1";
		}
	}

	@Override
	public String emailCheck(String user_email) {
		return userDAO.emailCheck(user_email);
	}

	@Override
	public void insertSubscribe(Map<String, String> map) {
		System.out.println(map);
		//멤버십 단계 상승 시켜주기
		userDAO.membershipUp(map);
		//빌링키 DB에 저장하기
		userDAO.insertBilling(map);
	}
	@Override
	public void deleteProfile(Map<String, String> map) {
		userDAO.deleteProfile(map);
		
	}

	@Override
	public void updateProfile(Map<String, String> map) {
		userDAO.updateProfile(map);

	}

	@Override
	public UserDTO getUSER(String user_email) {

		return userDAO.getUSER(user_email);
	}

	@Override
	public String priceMethod(String user_email) {
		return userDAO.priceMethod(user_email);
	}

	@Override
	public int getMembership(String user_email) {
		return userDAO.getMembership(user_email);
	}

	@Override
	public UserDTO findPwd(Map<String, String> map) {
		
		return userDAO.findPwd(map);
	}

	@Override
	public void updatePwd(Map<String, String> map) {
		userDAO.updatePwd(map);
		
	}

	@Override
	public List<UserDTO> findEmail(Map<String, String> map) {
		return userDAO.findEmail(map);
	}

}
