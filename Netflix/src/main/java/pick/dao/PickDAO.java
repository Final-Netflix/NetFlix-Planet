package pick.dao;

import java.util.List;

import pick.bean.PickDTO;

public interface PickDAO {

	public void addPickUp(PickDTO pickDTO);

	public String getPicksID();

	public void delPickUp(PickDTO pickDTO);

	public int getPickUp(PickDTO pickDTO);

	public List<PickDTO> getMyPickList(String profile_id);

}
