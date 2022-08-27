package classification.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import classification.bean.ClassificationDTO;
import classification.dao.ClassificationDAO;

@Service
public class ClassificationServiceImle implements ClassificationService {

	@Autowired
	ClassificationDAO classificationDAO;

	@Override
	public List<ClassificationDTO>  getClassifications() {
		return classificationDAO.getClassifications();
	}
}
