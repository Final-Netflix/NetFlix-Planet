package likes.bean;

import java.util.Date;

import lombok.Data;

@Data
public class LikesDTO {
	private int likes_id;
	private int video_id;
	private int profile_id;
	private String video_type;
	private int like_type;
	private Date like_time;

}
