package likes.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import likes.bean.LikesDTO;
import likes.dao.LikesDAO;

@Service
public class LikesServiceImpl implements LikesService {
	
	@Autowired
	private LikesDAO likesDAO;

	@Override
	public void delLike(LikesDTO likesDTO) {
		likesDAO.delLike(likesDTO);
	}

	@Override
	public void addLike(LikesDTO likesDTO) {
		String current = likesDAO.getLikesID();
		int seq;
		if(current == null) {
			seq = 1;
		}
		else {
			seq = Integer.parseInt(current)+1;
		}
		likesDTO.setLikes_id(seq);
		likesDAO.addLike(likesDTO);
	}

	@Override
	public int getLike(LikesDTO likesDTO) {
		String likeNum = likesDAO.getLike(likesDTO);
		if(likeNum == null) {
			return 0;
		}
		else {
			return Integer.parseInt(likeNum);
		}
	}
}
