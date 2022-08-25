package user.dao;

import java.util.List;
import java.util.Map;

import user.bean.UserDTO;
import user.bean.UserProfileDTO;

public interface UserDAO {

	public UserDTO login(Map<String, String> map);


	public String signUpCheck(UserDTO userDTO);

	public void signUp(UserDTO userDTO);

	public String emailCheck(String user_email);

	public List<UserProfileDTO> getProfileList(Map<String, String> map);

	public UserProfileDTO getProfile(Map<String, String> map);

	public UserProfileDTO addProfile(Map<String, String> map);

	public int getProfileIdSeq();


	public void deleteProfile(Map<String, String> map);


	public void updateProfile(Map<String, String> map);

}
