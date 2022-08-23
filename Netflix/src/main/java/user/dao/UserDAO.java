package user.dao;

import java.util.Map;

import user.bean.UserDTO;

public interface UserDAO {

	public UserDTO login(Map<String, String> map);

	public String signUpCheck(UserDTO userDTO);

	public void signUp(UserDTO userDTO);

	public String emailCheck(String user_email);

}
