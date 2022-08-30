package likes.dao;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import likes.bean.LikesDTO;

@Repository
@Transactional
public class LikesDAOMabatis implements LikesDAO {

	@Autowired
	private SqlSession sqlSession;

	@Override
	public void delLike(LikesDTO likesDTO) {
		sqlSession.delete("likesSQL.delLike", likesDTO);
	}

	@Override
	public String getLikesID() {
		return sqlSession.selectOne("likesSQL.getLikesID");
	}

	@Override
	public void addLike(LikesDTO likesDTO) {
		sqlSession.insert("likesSQL.addLike", likesDTO);
	}

	@Override
	public String getLike(LikesDTO likesDTO) {
		return sqlSession.selectOne("likesSQL.getLike", likesDTO);
	}
}
