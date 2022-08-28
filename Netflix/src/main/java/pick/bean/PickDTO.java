package pick.bean;

import lombok.Data;

@Data
public class PickDTO {
	private int picks_id;
	private int video_id;
	private int profile_id;
	private String video_type;
}
