package userChat.bean;

import java.util.Date;

import lombok.Data;

@Data
public class UserChatRoomDTO {
	private int chat_room_id;
	private int profile_id;
	private int video_id;
	private String chat_code;
	private String room_title;
	private Date play_time;
	
	
}
