package user.service;

import java.util.List;
import java.util.Map;

import user.bean.UserDTO;
import user.bean.UserProfileDTO;


public interface UserService {

	public UserDTO login(Map<String, String> map);

	public List<UserProfileDTO> getProfileList(Map<String, String> map);

	public UserProfileDTO getProfile(Map<String, String> map);

	public String signUp(UserDTO userDTO);

	public String emailCheck(String user_email);

}
