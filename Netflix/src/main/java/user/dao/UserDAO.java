package user.dao;

import java.util.Map;

import user.bean.UserDTO;

public interface UserDAO {

	public UserDTO login(Map<String, String> map);

}
