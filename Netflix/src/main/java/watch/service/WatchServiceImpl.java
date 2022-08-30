package watch.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import watch.bean.WatchDTO;
import watch.dao.WatchDAO;

@Service
public class WatchServiceImpl implements WatchService {
	
	@Autowired
	WatchDAO watchDAO = null;

	@Override
	public void addWatches(WatchDTO watchDTO) {
		String current = watchDAO.getWatchID();
		int seq;
		if(current == null) {
			seq = 1;
		}
		else {
			seq = Integer.parseInt(current)+1;
		}
		watchDTO.setWatchs_id(seq);
		watchDAO.addWatches(watchDTO);
	}

}
