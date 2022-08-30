package likes.service;

import likes.bean.LikesDTO;

public interface LikesService {

	void delLike(LikesDTO likesDTO);

	void addLike(LikesDTO likesDTO);

	int getLike(LikesDTO likesDTO);

}
