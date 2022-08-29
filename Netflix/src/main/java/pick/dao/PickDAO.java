package pick.dao;

import pick.bean.PickDTO;

public interface PickDAO {

	public void addPickUp(PickDTO pickDTO);

	public String getPicksID();

	public void delPickUp(PickDTO pickDTO);

	public int getPickUp(PickDTO pickDTO);

}
