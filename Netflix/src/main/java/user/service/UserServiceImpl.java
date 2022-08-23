package user.service;

import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import user.bean.UserDTO;
import user.dao.UserDAO;

@Service
public class UserServiceImpl implements UserService {
	@Autowired
	UserDAO userDAO = null;
	@Autowired
	private HttpSession session;
	
	@Override
	public boolean login(Map<String, String> map) {
		UserDTO userDTO = new UserDTO();
		session.setAttribute("user_email",userDTO.getUser_email());
		userDTO = userDAO.login(map);
		if(userDTO != null) {
			return true;
		}else {
			return false;
		}
	}

	@Override
	public String signUp(UserDTO userDTO) {
		String check = userDAO.signUpCheck(userDTO);
		String check1 = null;
		if(check == "1") {
			return check="1";
		}else {
			userDAO.signUp(userDTO);
			return check="0";
		}
	}

	@Override
	public String emailCheck(String user_email) {
		
		return userDAO.emailCheck(user_email);
	}

}
