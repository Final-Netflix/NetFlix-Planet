package pick.service;

import pick.bean.PickDTO;

public interface PickService {

	public void addPickUp(PickDTO pickDTO);

	public void delPickUp(PickDTO pickDTO);

	public String getPickUp(PickDTO pickDTO);

}
