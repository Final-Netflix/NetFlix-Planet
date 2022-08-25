package user.bean;

import java.util.Date;

import lombok.Data;

@Data
public class UserDTO {
	private String user_email;
	private String user_pwd;
	private String phone;
	private int memberShip_id;
	private int authority;
	private Date datetime;
}
