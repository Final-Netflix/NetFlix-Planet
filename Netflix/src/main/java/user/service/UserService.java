package user.service;

import java.util.Map;

import user.bean.UserDTO;

public interface UserService {

	public boolean login(Map<String, String> map);

	public String signUp(UserDTO userDTO);

	public String emailCheck(String user_email);

}
