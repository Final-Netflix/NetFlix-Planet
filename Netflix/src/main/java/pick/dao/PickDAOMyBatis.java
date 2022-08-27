package pick.dao;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import pick.bean.PickDTO;

@Repository
@Transactional
public class PickDAOMyBatis implements PickDAO {

	@Autowired
	private SqlSession sqlSession;
	
	@Override
	public void pickUp(PickDTO pickDTO) {
		sqlSession.insert("pickSQL.pickUp", pickDTO);
	}

}
