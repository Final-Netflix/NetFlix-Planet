package watch.dao;

import watch.bean.WatchDTO;

public interface WatchDAO {

	public String getWatchID();

	public void addWatches(WatchDTO watchDTO);

}
