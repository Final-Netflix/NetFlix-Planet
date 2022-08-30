package pick.service;

import java.util.List;

import pick.bean.PickDTO;

public interface PickService {

	public void addPickUp(PickDTO pickDTO);

	public void delPickUp(PickDTO pickDTO);

	public String getPickUp(PickDTO pickDTO);

	public List<PickDTO> getMyPickList(String profile_id);

}
