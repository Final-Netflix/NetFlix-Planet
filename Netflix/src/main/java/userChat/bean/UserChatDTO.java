package userChat.bean;

import java.util.Date;

import lombok.Data;

@Data
public class UserChatDTO {
	
	private int chat_id;
	private int profile_id;
	private int chat_room_id;
	private String content;
	private Date reg_date;
}
