package pick.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pick.bean.PickDTO;
import pick.dao.PickDAO;

@Service
public class PickServiceImpl implements PickService {
	
	@Autowired
	private PickDAO pickDAO = null;

	@Override
	public void addPickUp(PickDTO pickDTO) {
		String current = pickDAO.getPicksID();
		int seq;
		if(current == null) {
			seq = 1;
		}
		else {
			seq = Integer.parseInt(current)+1;
		}
		pickDTO.setPicks_id(seq);
		pickDAO.addPickUp(pickDTO);
	}

	@Override
	public void delPickUp(PickDTO pickDTO) {
		pickDAO.delPickUp(pickDTO);
	}

	@Override
	public String getPickUp(PickDTO pickDTO) {
		int isExist = pickDAO.getPickUp(pickDTO);
		if(isExist == 0) 	{	return "false";		}
		else 				{	return "true";		}
	}

	@Override
	public List<PickDTO> getMyPickList(String profile_id) {
		return pickDAO.getMyPickList(profile_id);
	}
}
