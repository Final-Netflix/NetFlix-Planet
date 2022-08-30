package likes.dao;

import likes.bean.LikesDTO;

public interface LikesDAO {

	String getLikesID();
	void delLike(LikesDTO likesDTO);
	void addLike(LikesDTO likesDTO);
	String getLike(LikesDTO likesDTO);

}
