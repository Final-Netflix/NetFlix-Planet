package pick.service;

import org.springframework.beans.factory.annotation.Autowired;

import pick.bean.PickDTO;
import pick.dao.PickDAO;

public class PickServiceImpl implements PickService {
	
	@Autowired
	PickDAO pickDAO = null;


	@Override
	public void pickUp(PickDTO pickDTO) {
		
		 pickDAO.pickUp(pickDTO);
		

	}
}
