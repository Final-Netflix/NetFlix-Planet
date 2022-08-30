package watch.dao;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import watch.bean.WatchDTO;

@Repository
@Transactional
public class WatchDAOMyBatis implements WatchDAO {
	@Autowired
	private SqlSession sqlSession;

	@Override
	public String getWatchID() {
		return sqlSession.selectOne("watchSQL.getWatchID");
	}

	@Override
	public void addWatches(WatchDTO watchDTO) {
		sqlSession.insert("watchSQL.addWatches", watchDTO);
	}
}
