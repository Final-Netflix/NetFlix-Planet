package user.service;

import java.util.List;
import java.util.Map;

import user.bean.UserDTO;
import user.bean.UserProfileDTO;


public interface UserService {

	public UserDTO login(Map<String, String> map);

	public List<UserProfileDTO> getProfileList(Map<String, String> map);

	public UserProfileDTO getProfile(Map<String, String> map);

	public UserProfileDTO addProfile(Map<String, String> map);

	public String signUp(UserDTO userDTO);

	public String emailCheck(String user_email);

	public void insertSubscribe(Map<String, String> map);

	public void deleteProfile(Map<String, String> map);

	public void updateProfile(Map<String, String> map);


	public UserDTO getUSER(String user_email);

	public String priceMethod(String user_email);

	public int getMembership(String user_email);

	public UserDTO findPwd(Map<String, String> map);

	public void updatePwd(Map<String, String> map);

	public List<UserDTO> findEmail(Map<String, String> map);

	public int changeEmail(Map<String, String> map);

	public int changePhone(UserDTO userDTO);




}
