package pick.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pick.bean.PickDTO;
import pick.dao.PickDAO;

@Service
public class PickServiceImpl implements PickService {
	
	@Autowired
	PickDAO pickDAO = null;

	@Override
	public void pickUp(PickDTO pickDTO) {
		// TODO Auto-generated method stub
		
	}


//	@Override
//	public void pickUp(PickDTO pickDTO) {
//		int seq = pickDAO.getProfileIdSeq()+1;
//		
//		pickDAO.pickUp(pickDTO);
//		
//
//	}
}
