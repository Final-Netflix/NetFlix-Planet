package watch.bean;

import java.util.Date;

import lombok.Data;

@Data
public class WatchDTO {
	private int watchs_id;
	private int video_id;
	private int profile_id;
	private Date stop_time;
	private String video_type;
	private Date watch_time;
}
