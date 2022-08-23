package user.bean;

import lombok.Data;

@Data
public class UserProfileDTO {
	private int profile_id;
	private String profile_name;
	private String user_email;
	private String img_path;
	private int kids;
	
}
