package test.dao;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public class TestDAOMabatis implements TestDAO {
	
	@Autowired
	private SqlSession sqlSession;

	@Override
	public String getTest() {
		return sqlSession.selectOne("testSQL.getTest");
	}

}
