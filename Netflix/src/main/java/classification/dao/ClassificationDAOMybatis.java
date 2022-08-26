package classification.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import classification.bean.ClassificationDTO;

@Repository
@Transactional
public class ClassificationDAOMybatis implements ClassificationDAO {
	
	@Autowired
	private SqlSession sqlSession;

	@Override
	public List<ClassificationDTO> getClassifications() {
		return sqlSession.selectList("classificationSQL.getClassifications");
	}
}
