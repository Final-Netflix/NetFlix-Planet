package pick.dao;

import java.util.List;

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
	public void addPickUp(PickDTO pickDTO) {
		sqlSession.insert("pickSQL.addPickUp", pickDTO);
	}

	@Override
	public String getPicksID() {
		return sqlSession.selectOne("pickSQL.getPicksID");
	}

	@Override
	public void delPickUp(PickDTO pickDTO) {
		sqlSession.delete("pickSQL.delPickUp", pickDTO);
	}

	@Override
	public int getPickUp(PickDTO pickDTO) {
		return sqlSession.selectOne("pickSQL.getPickUp", pickDTO);
	}

	@Override
	public List<PickDTO> getMyPickList(String profile_id) {
		return sqlSession.selectList("pickSQL.getMyPickList", profile_id);
	}

}
